import Accordion from './Accordion';

const Accordioncomp: React.FC = () => {
  const accordionItems = [
    {
      title: 'What sets GlobNet apart in the realm of global connections?',
      content: 'Our platform empowers users to effortlessly expand their reach on a global scale while fostering the spirit of local engagement'
    },
    {
      title: 'Is there a free trial available for GlobNest?',
      content: 'You can test the waters with our free trial for one month'
    },
    {
      title: 'Which businesses and individual benefit from GlobNest?',
      content: 'All and everyone who keys into the opportunity'
    },

    {
        title: 'can I personalize my communication workspace?',
        content: 'Absolutely. Yes, you can.'
    }
  ];

  return (
    <div className="p-2 mx-[8vw]">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Accordioncomp;
