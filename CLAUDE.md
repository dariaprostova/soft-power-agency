# soft-power-agency — softpowerspace.com

Сайт агентства Soft Power на vinext (Next.js API), собирается в Docker (`Dockerfile`,
`docker-compose.yml`). Состояния нет: ни базы, ни загрузок.

## Окружения и деплой

- **Только prod, staging нет** (решение от 2026-10-26): сайт правит сама Даша через
  своих агентов.
- **Любой push в `main` автоматически уходит в прод** в течение минуты: на сервере
  `site-autodeploy@softpowerspace.timer` делает `git fetch` и выкатывает новый `main`
  скриптом `/usr/local/bin/site-autodeploy`. У GitHub нет доступа к серверу.
- Скрипт собирает образ, проверяет, что `/` отвечает 200, при неудаче откатывается на
  прежний коммит и шлёт алерт, при успехе ставит тег `release-ГГГГ.ММ.ДД[-N]`.
- Автоматически **не** выкатываются изменения `docker-compose.yml`: их деплоит человек
  вручную после ревью.
- Не убирать `output: "standalone"` из `next.config.ts`: без него `Dockerfile` не
  соберётся (сборка упадёт, сайт останется на прежней версии).
- Лог: `/var/log/site-autodeploy-softpowerspace.log`.
