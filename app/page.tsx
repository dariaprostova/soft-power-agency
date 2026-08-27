const services = [
  {
    number: "01",
    title: "Brand experiences",
    text: "Launches, campaigns and live moments that turn positioning into something people can physically feel — and want to talk about.",
    tags: ["Launches", "Immersive events", "Community moments"],
  },
  {
    number: "02",
    title: "Spaces & cultural moments",
    text: "Temporary and lasting spaces with a complete human journey: concept, dramaturgy, light, sound, art, movement and ritual.",
    tags: ["Spatial concepts", "Pop-ups", "Cultural programming"],
  },
  {
    number: "03",
    title: "Team & founder gatherings",
    text: "Offsites, retreats and milestone occasions designed around a real human objective — from reconnection to creative renewal.",
    tags: ["Offsites", "Retreats", "Private gatherings"],
  },
];

const work = [
  {
    id: "nike",
    eyebrow: "Brand space · Community · Culture",
    title: "Nike / Nike Box MSK",
    text: "Leading a landmark brand space and international projects across campaigns, partnerships and live experiences — with large budgets and multidisciplinary production teams.",
    note: "Selected details remain confidential.",
  },
  {
    id: "sekta",
    eyebrow: "Business building · Experience at scale",
    title: "Sektaschool Moscow",
    text: "Built the Moscow operation from zero as CEO: 12 spaces, a team of 50+ and a city-wide community shaped around movement, belonging and shared momentum.",
    note: "From one idea to a living system.",
  },
  {
    id: "theatre",
    eyebrow: "Soft Power Original · Immersive performance",
    title: "The Old Theatre",
    text: "A one-night experience for 100 people in a historic theatre — where movement, live music, architecture and collective presence became one emotional arc.",
    note: "Lisbon · 100 guests",
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
        <a className="navCta" href="https://t.me/beloved_dasha" target="_blank" rel="noreferrer">
          Start a project ↗
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroLabel">Independent experience agency · Lisbon / Worldwide</div>
        <h1>
          We create experiences
          <span>people carry with them.</span>
        </h1>
        <div className="heroBottom">
          <p>
            Events, spaces and cultural moments that shape how people feel about a brand,
            a company — and each other.
          </p>
          <div className="heroMark" aria-hidden="true"><span>SP</span><i /></div>
        </div>
      </section>

      <section className="statement" id="approach">
        <div className="shell statementGrid">
          <div className="sectionIndex">01 / Point of view</div>
          <div>
            <h2>Not an event.<br /><em>A shift in state.</em></h2>
            <p className="largeCopy">
              We begin with the change you want to create in people. Then we make every
              element — space, story, light, sound, body, art, nature and technology —
              work towards it.
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
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell workHead">
          <div className="sectionIndex">03 / Selected experience</div>
          <h2>Scale, leadership<br />and an <em>authored eye.</em></h2>
        </div>
        <div className="workGrid shell">
          {work.map((item, index) => (
            <article className={`case case-${item.id}`} key={item.id}>
              <div className="caseVisual" aria-hidden="true">
                <span className="caseCount">0{index + 1}</span>
                <div className="visualWord">{item.id === "nike" ? "MOVE" : item.id === "sekta" ? "12×" : "ONE"}</div>
                <div className="visualSub">{item.id === "nike" ? "body / city / culture" : item.id === "sekta" ? "spaces across moscow" : "room / shared rhythm"}</div>
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

      <section className="founder" id="about">
        <div className="shell founderGrid">
          <div className="sectionIndex light">04 / Founder</div>
          <div className="founderTitle">
            <span>Dasha Prostova</span>
            <h2>Experience Director.<br />Founder of Soft Power.</h2>
          </div>
          <div className="founderQuote">
            “Beauty is never decoration. It is a way to move people — towards aliveness,
            connection and a future they can believe in.”
          </div>
          <div className="founderBio">
            <p>
              Dasha has spent 15+ years building experiences across wellbeing, sport,
              startups and global brands. She led Sektaschool Moscow as CEO, worked in
              Nike&apos;s brand team, and built Soft Power into an international community
              of more than 2,000 people.
            </p>
            <p>
              Her work joins business thinking and embodied intelligence. She leads the
              concept, creative direction and project team — assembling the right minds
              for each commission.
            </p>
          </div>
        </div>
        <div className="proof shell" aria-label="Experience highlights">
          <div><strong>15+</strong><span>years shaping human experience</span></div>
          <div><strong>50+</strong><span>people led in one team</span></div>
          <div><strong>12</strong><span>spaces launched in Moscow</span></div>
          <div><strong>2K+</strong><span>people in our global community</span></div>
        </div>
      </section>

      <section className="values shell">
        <div className="sectionIndex">05 / Our filter</div>
        <div className="valuesBody">
          <h2>For those moving<br /><em>humanity forward.</em></h2>
          <p>
            We are drawn to founders and organisations working across technology, science,
            health, longevity, space, culture and wellbeing — with a genuine intention to
            make life better.
          </p>
          <div className="valueLine">No empty spectacle. No harm disguised as culture. No beauty without meaning.</div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div className="sectionIndex light">06 / Let&apos;s make it real</div>
          <div>
            <h2>Have a feeling you<br />want people to remember?</h2>
            <a className="bigCta" href="https://t.me/beloved_dasha" target="_blank" rel="noreferrer">
              Tell Dasha about it <span>↗</span>
            </a>
          </div>
        </div>
        <div className="shell footerBottom">
          <div className="wordmark inverse">soft power<span>agency</span></div>
          <div>Lisbon · Working worldwide</div>
          <div>© 2026 Soft Power Agency</div>
        </div>
      </footer>
    </main>
  );
}
