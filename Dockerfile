# Сборка отделена от рантайма: в образ едет только dist/standalone —
# сервер и те пакеты, которые vinext реально грузит (38 МБ вместо ~1 ГБ
# полных node_modules с компилятором next, vite и wrangler).

FROM node:22-alpine AS build
WORKDIR /app
# Слой зависимостей отдельно от исходников: правка страницы не тянет за собой
# повторный npm ci.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080
COPY --from=build /app/dist/standalone ./
# Сайт ничего не пишет на диск, поэтому и права root ему не нужны.
USER node
EXPOSE 8080
CMD ["node", "server.js"]
