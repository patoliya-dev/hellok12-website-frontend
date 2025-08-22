import FaqSection, { FAQ } from "../ui/FaqSection";


const languageFaqs: FAQ[] = [
  {
    question: "How do I receive payments for my lessons?",
    answer:
      "Payments are processed securely through our platform. You’ll receive payments for bookings minus the 20% commission. Payments are typically made on a bi-weekly or monthly basis, depending on your agreement.",
  },
  {
    question: "How are bookings handled?",
    answer:
      "Once students book a lesson through the platform, you’ll be notified with the details. You can manage your schedule directly on the platform, with real-time updates on bookings, cancellations, and payments.",
  },
  {
    question: "Can I set my own rates?",
    answer:
      "Yes, you have full control over your lesson rates. You can set your own pricing based on the lesson duration and type, while keeping in mind the 20% commission that applies to each booking.",
  },
  {
    question: "Do I need to create my own teaching materials?",
    answer:
      "Yes, you need to create your own teaching materials. While we offer a range of curriculum-aligned games and resources that will supplement what students learn in class, you’ll still be responsible for designing the core lessons.",
  },
  {
    question: "How does the 20% commission work?",
    answer:
      "We charge a 20% commission on each lesson booked through the platform. This commission covers the operational costs of running the platform and providing additional resources like curriculum-aligned games and support.",
  },
  {
    question: "Is there a minimum number of students or lessons required to sign up?",
    answer:
      "No, there are no minimum requirements. You can sign up and start offering lessons to as few or as many students as you’d like. Our platform is designed to be flexible and scalable for teachers of all levels.",
  },
  {
    question: "Can I track my students’ progress?",
    answer:
      "Yes! You’ll have access to real-time progress tracking for your students. This includes feedback from students’ completed games, lesson outcomes, and assessments, helping you tailor future lessons and keep parents informed.",
  },
  {
    question: "What happens if I need to cancel or reschedule a lesson?",
    answer:
      "You can easily manage cancellations and reschedule lessons through the platform. We recommend providing a 24-hour notice for cancellations to avoid any fees, but our platform gives you flexibility to manage changes in real time.",
  },
  {
    question: "Can I offer both group and one-on-one lessons?",
    answer:
      "Yes, you can offer both group lessons and one-on-one lessons. Our platform supports a range of teaching formats to suit your teaching style and your students’ needs.",
  },
  {
    question: "Are there any requirements for teachers to join?",
    answer:
      "To join as a teacher, you should have relevant qualifications and experience in teaching the language(s) you specialize in. We require that all teachers provide proof of their qualifications, such as teaching certificates or language proficiency.",
  },
  {
    question: "How do I get support if I have questions?",
    answer:
      "We offer 24/7 support through our help center, email, and chat options. If you ever have questions or need assistance, our support team is ready to help you.",
  },
  {
    question: "Do you offer both in-person and online classes?",
    answer:
      "Yes, we offer both in-person and online class options. Teachers can choose to teach either format, depending on their availability and the needs of their students. Our platform is flexible, allowing you to connect with students in person at your preferred location or virtually, offering a hybrid learning experience that works for everyone.",
  },
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
