import FaqSection, { FAQ } from "../ui/FaqSection";

const languageFaqs: FAQ[] = [
  {
    question: 'What is the "Learn Through Play" approach?',
    answer:
      "At HelloK12, we make learning fun with our proprietary, curriculum-aligned games. These interactive games help students practice and reinforce the skills they’ve learned in class. Designed to be engaging and effective, they allow kids to build confidence, enhance retention, and apply their language skills in a playful, real-world context.",
  },
  {
    question: "Is the platform safe and secure for my child?",
    answer:
      "Absolutely! We take data privacy and security very seriously. Our platform is designed to provide a safe learning environment, and all teachers are vetted through background checks. We also use encrypted communication and ensure parental controls are in place.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply sign up on our website, choose a language and class schedule that fits your child’s needs, and book a trial lesson. If you have any questions, feel free to reach out to our support team for guidance.",
  },
  {
    question: "Do you offer flexible scheduling?",
    answer:
      "Yes! We understand that families have busy schedules, so we offer flexible scheduling options. You can book lessons at times that work best for you, whether it’s weekdays, weekends, or after-school hours.",
  },
  {
    question: "Are there group classes or only one-on-one lessons?",
    answer:
      "We offer both group classes and one-on-one lessons. Group classes are a fun, social way for kids to learn alongside others, while one-on-one lessons provide a more personalized experience. You can choose based on your child’s preferences and learning style.",
  },
  {
    question: "How do I know which class is right for my child?",
    answer:
      "We recommend starting with a trial lesson to get a feel for the platform and determine which class best suits your child’s level and interests. Our teachers will also provide recommendations based on your child’s learning progress.",
  },
  {
    question: "Can my child learn more than one language at a time?",
    answer:
      "Yes! Children are capable of learning multiple languages simultaneously. We offer flexible programs that allow kids to explore more than one language if desired. However, we recommend starting with one language to build a solid foundation before introducing another.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "We periodically offer discounts and promotions for new users, seasonal programs, or group sign-ups. Check our website regularly or sign up for our newsletter to receive updates on the latest offers.",
  },
  {
    question: "What if my child needs extra help with a lesson?",
    answer:
      "If your child needs additional support, please leverage our curriculum-aligned games to practice the skills learned in class. Feel free to use our group messaging feature to collaborate with other students in the class or you can reach your directly to your teacher. Our teachers are committed to helping every child succeed and will work with you to ensure they receive the help they need.",
  },
  {
    question: "How do I communicate with my child’s teacher?",
    answer:
      "You can easily communicate with your child’s teacher through our platform’s messaging system. We encourage open communication to keep you updated on your child’s progress and address any questions or concerns you may have.",
  },
  {
    question: "Can I cancel or reschedule a lesson?",
    answer:
      "Yes, you can reschedule or cancel a lesson with 24 hours’ notice. If you need to make changes to your schedule, simply log into your account and adjust your booking. Please note that cancellation policies may vary based on subscription plans.",
  },
  {
    question: "Is there a trial lesson available?",
    answer:
      "Yes! We offer a trial lesson so your child can experience our platform firsthand before committing to a full course. It’s a great way to see how our teaching methods work and if the platform is the right fit for your family.",
  },
  {
    question: "How do I pay for classes?",
    answer:
      "You can pay for classes through our secure online payment system using credit cards or debit cards.",
  },
  {
    question: "How does the platform support different learning styles?",
    answer:
      "Our platform supports various learning styles with specialized teachers and curriculum-aligned games targeting key language skills—speaking, listening, reading, and writing. Teachers tailor lessons to your child’s needs, while our interactive games reinforce skills in a fun, engaging way, ensuring well-rounded language development.",
  },
  {
    question: "What makes your platform different from other language programs?",
    answer:
      "What sets us apart is our play-based learning, personalized lesson plans, and the ability to connect with native-speaking teachers. We focus on making learning fun, interactive, and culturally immersive, helping kids not just learn a language but also understand and appreciate other cultures.",
  }
];

export default function Faq() {
  return (
    <FaqSection
      faqs={languageFaqs}
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions about HelloK12"
    />
  );
}
