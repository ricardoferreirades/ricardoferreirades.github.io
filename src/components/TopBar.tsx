export default function TopBar() {
    return <section className="flex justify-between items-center gap-3 border-b border-dark-gray-3 py-6 text-xs text-dark-gray-5">
      <a href="mailto:contact@rferreira.dev" className="inline-flex items-center gap-3 hover:text-light-gray"><img src="/assets/images/envelope.svg" alt="an envelop icon which represents a contact near the email link" />contact@rferreira.dev</a>
      <menu className="flex gap-6">
        <a href="#" className="hover:text-light-gray">Projects</a>
        <a href="https://docs.google.com/document/d/1xC9EIEc4SiMVMkZIlG9Dq33Oen12Q2jI1pkZ9YXS5sQ/edit?usp=sharing" target="_blank" title="Curriculum Vitae"  className="hover:text-light-gray">CV</a>
        <a href="https://github.com/ricardoferreirades" className="hover:text-light-gray">Github</a>
      </menu>
    </section>
  }