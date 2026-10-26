import { ConsentVideo } from "./components/ConsentVideo";
import { ManageConsent } from "./components/CookieConsent";

const services = [
  {
    number: "01",
    title: "Brand experiences",
    text: "Launches, campaigns and live moments that turn positioning into something people can physically feel — and want to talk about",
    tags: ["Launches", "Immersive events", "Community moments"],
  },
  {
    number: "02",
    title: "Spaces & cultural moments",
    text: "Temporary and lasting spaces with a complete human journey: concept, dramaturgy, light, sound, art, movement and ritual",
    tags: ["Spatial concepts", "Pop-ups", "Cultural programming"],
  },
  {
    number: "03",
    title: "Team & founder gatherings",
    text: "Offsites, retreats and milestone occasions designed around a real human objective — from reconnection to creative renewal",
    tags: ["Offsites", "Retreats", "Private gatherings"],
  },
];

const work = [
  {
    id: "nike",
    eyebrow: "Brand space · Community · Culture",
    title: "Nike / Nike Box MSK",
    text: "Five years on Nike’s brand team: led Nike Box MSK from the design stage to the centre’s closure in 2022, built and managed the venue team, led sports partnerships and integrations, and delivered international productions and global campaigns locally",
    note: "2017–2022 · Moscow",
  },
  {
    id: "sekta",
    eyebrow: "Business building · Experience at scale",
    title: "Sektaschool Moscow",
    text: "Built the Moscow operation from zero as CEO: a team of 50+, 12 studios across the city, collaborations with Afisha, Vogue and Condé Nast, and a major partnership with Nike",
    note: "2013–2016 · From one idea to a living system",
  },
  {
    id: "theatre",
    eyebrow: "Soft Power Original · Immersive performance",
    title: "Immersive Yoga Celebration",
    text: "A one-night experience for 100 people in a historic theatre — where movement, live music, architecture and collective presence became one emotional arc",
    note: "Lisbon · 100 guests",
  },
  {
    id: "ballet",
    eyebrow: "Brand commission · Digital performance",
    title: "The Nutcracker / BCS",
    text: "An immersive online ballet created for BCS Bank with artists of the Mariinsky Theatre — translating a familiar cultural story into a complete digital experience",
    note: "Film · Performance · Brand experience",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="Soft Power Agency, home">
          soft power<span>agency</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">Approach</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="navCta" href="mailto:dariaprostova@gmail.com?subject=Soft%20Power%20Agency%20project">
          Start a project ↗
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroLabel">Independent experience agency · Lisbon / Worldwide</div>
        <h1>
          We create experiences
          <span>people carry with them</span>
        </h1>
        <div className="heroBottom">
          <p>
            Events, spaces and cultural moments that shape how people feel about a brand,
            a company — and each other
          </p>
          <div className="heroMark" aria-hidden="true"><span>SP</span><i /></div>
        </div>
      </section>

      <section className="statement" id="approach">
        <div className="shell statementGrid">
          <div className="sectionIndex">01 / Point of view</div>
          <div>
            <h2>Not an event<br /><em>A shift in state</em></h2>
            <p className="largeCopy">
              We begin with the change you want to create in people. Then we make every
              element — space, story, light, sound, body, art, nature and technology —
              work towards it
            </p>
          </div>
        </div>
      </section>

      <section className="services shell">
        <div className="sectionIndex">02 / Come to us for</div>
        <div className="serviceList">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <div className="serviceNumber">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
          <p className="priceLine">Team sessions from €500 · Strategy sessions from €600 · 2-week concept sprints from €2,500 · Turnkey experiences from €8,000</p>
        </div>
      </section>

      <section className="possibilities">
        <div className="shell possibilitiesHead">
          <div className="sectionIndex">03 / Our dream briefs</div>
          <div>
            <h2>The kind of questions<br /><em>we dream about</em></h2>
            <p>Not a service menu, but a glimpse into the scale, imagination and human ambition that make us want to begin</p>
          </div>
        </div>
        <div className="shell possibilityGrid">
          <article><span>01</span><h3>Design a city of the future</h3><p>Imagine its human experience from the ground up — how people arrive, gather, restore, learn, celebrate and belong</p></article>
          <article><span>02</span><h3>Produce a conference unlike any other</h3><p>Turn a complex idea into one coherent journey across programming, space, speakers, art, transitions and audience energy</p></article>
          <article><span>03</span><h3>Create a founder series for an AI company</h3><p>Build a sequence of live experiences where young entrepreneurs meet, make and grow — as an image and community campaign people genuinely value</p></article>
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell workHead">
          <div className="sectionIndex">04 / Selected experience</div>
          <h2>Scale, leadership<br />and an <em>authored eye</em></h2>
        </div>
        <div className="workGrid shell">
          {work.map((item, index) => (
            <article className={`case case-${item.id}`} key={item.id}>
              <div className={`caseVisual media-${item.id}`}>
                {item.id === "nike" && <ConsentVideo id="3haW1zE8Fx0" title="Nike Box MSK project recap" poster="/portfolio/IMG_5731.jpg" />}
                {item.id === "ballet" && <ConsentVideo id="oTWI87UVINc" title="The Nutcracker immersive online ballet recap" poster="/portfolio/case-ballet-recap.jpg" />}
                {item.id === "sekta" && <div className="sektaGallery">
                  {[1,2,3,4,5].map((photo) => <img key={photo} src={`/portfolio/sekta-${photo}.jpg`} alt={`Sektaschool Moscow experience ${photo}`} loading="lazy" />)}
                </div>}
                {item.id === "theatre" && <a className="theatreMedia" href="https://www.instagram.com/reel/DRw_kcOCOk0/" target="_blank" rel="noreferrer" aria-label="Watch the Soft Power immersive theatre experience on Instagram">
                  <img src="/portfolio/immersive-yoga.jpg" alt="Soft Power immersive movement experience in a historic theatre" loading="lazy" />
                  <span className="play">Watch experience ↗</span>
                </a>}
                <span className="caseCount">0{index + 1}</span>
              </div>
              <div className="caseCopy">
                <div className="eyebrow">{item.eyebrow}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="shell testimonialsHead">
          <div className="sectionIndex">05 / What people carry with them</div>
          <h2>Care felt<br /><em>in every detail</em></h2>
        </div>
        <div className="shell testimonialGrid">
          <blockquote>
            <p>“The whole space and the people around were like puzzle pieces from the same box. Everything felt so harmonious — a truly unique experience”</p>
            <footer>Anya Churkina · Soft Power retreat guest</footer>
          </blockquote>
          <blockquote>
            <p>“You can feel the careful preparation and attention to detail. It says so much about the strength of the experience — I left wanting to return”</p>
            <footer>Masha Ivanova · Soft Power retreat guest</footer>
          </blockquote>
          <blockquote>
            <p>“Beautiful organisation down to the smallest detail. The programme was full without ever feeling overwhelming — every moment felt exactly in its place”</p>
            <footer>Valeria Potashko · Soft Power retreat guest</footer>
          </blockquote>
        </div>
      </section>

      <section className="founder" id="about">
        <div className="shell founderGrid">
          <div className="sectionIndex light">06 / Founder</div>
          <div className="founderTitle">
            <span>Dasha Prostova</span>
            <h2>Experience Architect<br />Founder of Soft Power</h2>
          </div>
          <div className="founderQuote">
            “Beauty is never decoration. It is a way to move people — towards aliveness,
            connection and a future they can believe in”
          </div>
          <div className="founderBio">
            <p>
              Dasha has spent 15+ years building experiences across wellbeing, sport,
              startups and global brands. She led Sektaschool Moscow as CEO, worked in
              Nike&apos;s brand team, and built Soft Power — a wellbeing brand with more
              than 5,000 people practising worldwide. For its first years Soft Power
              worked with individuals; now it brings the same approach to companies
            </p>
            <p>
              Her work joins business thinking and embodied intelligence. She leads the
              concept, creative direction and project team — assembling the right minds
              for each commission
            </p>
          </div>
          <figure className="founderPortrait">
            <img src="/portfolio/Dasha__823.jpg" alt="Dasha Prostova, Founder and Experience Architect of Soft Power Agency" loading="lazy" />
            <figcaption>Dasha Prostova · Lisbon, Portugal</figcaption>
          </figure>
        </div>
        <div className="proof shell" aria-label="Experience highlights">
          <div><strong>15+</strong><span>years shaping human experience</span></div>
          <div><strong>50+</strong><span>people led in one team</span></div>
          <div><strong>12</strong><span>spaces launched in Moscow</span></div>
          <div><strong>5K+</strong><span>people practising with Soft Power</span></div>
        </div>
      </section>

      <section className="values shell">
        <div className="sectionIndex">07 / Our filter</div>
        <div className="valuesBody">
          <h2>For those moving<br /><em>humanity forward</em></h2>
          <p>
            We are drawn to founders and organisations working across technology, science,
            health, longevity, space, culture and wellbeing — with a genuine intention to
            make life better
          </p>
          <div className="valueLine">No empty spectacle · No harm disguised as culture · No beauty without meaning</div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div className="sectionIndex light">08 / Let&apos;s make it real</div>
          <div>
            <h2>Have a feeling you<br />want people to remember?</h2>
            <a className="bigCta" href="mailto:dariaprostova@gmail.com?subject=Soft%20Power%20Agency%20project">
              Tell Dasha about it <span>↗</span>
            </a>
            <p className="altContact"><a href="mailto:dariaprostova@gmail.com">dariaprostova@gmail.com</a> · <a href="https://www.linkedin.com/in/dashaprostova/" target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
          </div>
        </div>
        <div className="shell footerBottom">
          <div className="wordmark inverse">soft power<span>agency</span></div>
          <div>Lisbon · Working worldwide</div>
          <div>© 2026 Soft Power Agency</div>
        </div>
        <div className="shell legalLinks"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/accessibility">Accessibility</a><ManageConsent /></div>
      </footer>
    </main>
  );
}
