import AnimatedTestimonials from "../ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I never trusted anything more than my dacoits, but SkillBridge AI gives answers faster than my bullets! Uploading PDFs and images? Bas, ek baar AI ka jawab dekh lo… fir tum khud kehoge Yeh AI bohot mazedaar hai! 🔥",
      name: "🗡️ Gabbar",
      designation: "Kitne AI the? 🤨",
      src: "https://images.firstpost.com/wp-content/uploads/2016/11/amjad-khan-3.jpg?im=FitAndFill=(1200,675)",
    },
    {
      quote:
        "Finally, an AI that listens, understands, and responds like a true henchman! SkillBridge AI makes learning smooth and easy—upload anything and get crisp answers. Ab knowledge chhupane ka nahi, seekhne ka time hai!",
      name: "💀 Mogambo",
      designation: "Mogambo khush hua! 😈",
      src: "https://wp.scoopwhoop.com/wp-content/uploads/2020/03/5e4b8b72e2a04c2de8dd4d1f_ee770eb2-4af1-4905-bf56-146c8ae4592d.jpg",
    },
    {
      quote:
        "Even I can’t trick this AI—it answers everything! Whether it’s PDFs or images, SkillBridge AI works fast and smart. No more searching through endless pages; AI sab kuch bata dega! 💡",
      name: "🐍 Kalia",
      designation: "Arre Sambha, yeh AI toh kamaal ka hai!",
      src: "https://img.jagranjosh.com/imported/images/E/GK/viju-khote2.jpg",
    },
    {
      quote:
        "I tried to outsmart it, but SkillBridge AI always wins! Whether I upload documents or images, it gives me perfect answers. Now I can finally outthink that sneaky little mouse… or can I? 🤔",
      name: "🐱 Tom",
      designation: "This AI is smarter than Jerry! 😾",
      src: "https://cdn.pixabay.com/photo/2017/06/13/00/07/tom-and-jerry-2397258_960_720.png",
    },
    {
      quote:
        "SkillBridge AI is fast, clever, and always accurate—just like me! Upload anything, and it gives you precise answers instantly. Now, even Tom won’t catch up with my knowledge! 🏃💨",
      name: "🐭 Jerry",
      designation: "Hehehe! Even Tom can't beat this AI! 🧀",
      src: "https://i.pinimg.com/736x/a5/96/d9/a596d930bcaadb46e5e138189bcd5245.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default AnimatedTestimonialsDemo