export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <p className="text-lg text-slate-600 dark:text-slate-400">
        Here are some of the projects I've worked on. Each one represents a
        unique challenge and solution.
      </p>
      <div>
        <div>
          <h2> GAmma Quiz App </h2>
          <p>React, React Router, Tailwind CSS</p>
          <p>
            An interactive coding-knowledge quiz pulling live questions from a
            trivia API, styled with a code-editor-inspired UI. Built to learn
            useReducer for centralized state management and useContext to avoid
            prop drilling across routes. [GitHub link][Live demo link]
          </p>
        </div>
        <div>
          <h2>Weather App</h2>
          <p>React, Vite, Tailwind CSS</p>
          <p>
            Real-time weather lookup with a 24-hour-before/24-hour-after hourly
            forecast, built around a custom useWeather hook instead of a reducer
            — a deliberate architecture choice to practice a different
            state-management pattern from the quiz app. [GitHub link] · [Live
            demo link]
          </p>
        </div>
        <div>
          <h2>My Portfolio</h2>
          <p>Next.js, TypeScript, Tailwind CSS</p>
          <p>
            My first project using the Next.js App Router and TypeScript —
            multi-page routing, a real working contact form via Resend, and a
            deliberate Server/Client Component split for performance. [GitHub
            link] · [Live demo link]
          </p>
        </div>
        <div>
          <h2>Coopérative des Produits du Terroir</h2>
          <p>Purely HTML, CSS, JavaScript CRUD</p>
          <p>
            A cooperative products website built across web development
            coursework, progressing from semantic HTML/CSS through full
            JavaScript CRUD functionality. (Worth including if it's a genuinely
            presentable coursework project — good evidence of your progression
            from fundamentals to full-stack CRUD)
          </p>
        </div>
      </div>
    </div>
  );
}
