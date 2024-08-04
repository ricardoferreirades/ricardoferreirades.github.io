import Card, { CardProps } from "./Card"

  export default function CardsSection() {
    const cardDataList: Array<CardProps> = [
      {
        icon: {
          src: '/assets/images/pencil.svg',
          alt: 'pencil icon which representes creativity'
        },
  
        title: 'UI & UX',
        description: 'Creating user interfaces and experiences that enable easy accessibility.'
      },
      {
        icon: {
          src: '/assets/images/code.svg',
          alt: 'pencil icon which representes creativity'
        },
        title: 'Development',
        description: 'Bringing ideas to life using the most advanced technologies.'
      },
      {
        icon: {
          src: '/assets/images/group.svg',
          alt: 'pencil icon which representes creativity'
        },
        title: 'Collaboration',
        description: 'Playing an encouraging role to maintain a good culture overall.'
      }
    ]
    return <section className="flex justify-center items-center gap-8 max-w-[733px] mx-auto mb-10">
      {
        cardDataList.map(({title, icon, description}) => {
          return <Card key={icon.src} title={title} icon={icon} description={description} />
        })
      }
    </section>
  }
  
  