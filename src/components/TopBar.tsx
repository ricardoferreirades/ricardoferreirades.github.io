export default function TopBar() {
    return <section className="flex justify-between items-center gap-3 border-b py-6 text-xs">
      <a href="mailto:contact@rferreira.dev" className="inline-flex items-center gap-3"><img src="/assets/images/envelope.svg" alt="an envelop icon which represents a contact near the email link" />contact@rferreira.dev</a>
      <menu className="flex gap-6">
        <a href="">Portfolio</a>
        <a href="">Youtube</a>
        <a href="">Medium</a>
        <a href="">Hacker Hank</a>
        <a href="">Github</a>
        <a href="">CV Download</a>
        <a href="">DE</a>
      </menu>
    </section>
  }