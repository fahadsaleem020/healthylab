import { Dish, Plan } from "@/types/schema";

export const dishes: Omit<Dish, "modes" | "id">[] = [
  
];

export const ourTenSteps: { title: string; data: string }[] = [
  {
    title: `signup and commit to change.`,
    data: `Sign up and commit to change is an invitation for our users to make a
    conscious decision to improve their diet and lifestyle. By signing up
    for our website, you'll gain access to a variety of diet plans and
    resources that can help you achieve your health goals. Our community of
    like-minded individuals is here to support you on your journey to a
    healthier you. So why wait? Sign up today and start making a positive
    change in your life.`,
  },
  {
    title: "Get a real look at where you are starting from.",
    data: "Assess your starting point accurately by using our tools and resources that provide a comprehensive view of your current health status. This will help you to determine your strengths and weaknesses, allowing you to make better-informed decisions about your diet plan. By understanding your starting point, you can set achievable goals and track your progress effectively. Sign up now to get access to our tools and start your journey towards a healthier you.",
  },
  {
    title: "Set a clear goal for where you want to be.",
    data: "Setting a clear goal is a crucial step towards achieving your health goals. By defining your goal, you can create a roadmap to success and stay focused on what you want to achieve. Our platform provides you with the tools and resources you need to set a clear goal and track your progress towards it. Sign up now to start setting your health goals and take the first step towards a healthier you.",
  },
  {
    title: "Choose a meal plan tailored to your needs and goals.",
    data: "We understand that everyone's dietary needs and goals are unique, which is why we offer a variety of meal plans that are tailored to your individual needs. Whether you're looking to lose weight, gain muscle, or improve your overall health, we have a plan that's right for you. Our meal plans are designed by experienced nutritionists and chefs, ensuring that they are both delicious and nutritious. Sign up today to get access to our meal plans and start your journey towards a healthier you.",
  },
  {
    title: "Manage your meals and get real-time feedback",
    data: "Our platform allows you to easily manage your meals and track your progress towards your health goals. You can log your meals and receive real-time feedback from our nutritionists and community members, helping you to stay on track and motivated. Our goal is to provide you with the tools and support you need to achieve your health goals. Sign up now to start managing your meals and getting real-time feedback.",
  },
  {
    title: "Watch as your progress gets tracked and celebrated.",
    data: "Our platform allows you to easily track your progress and celebrate your successes. As you work towards your health goals, you can see your progress in real-time and receive recognition for your achievements. Our community of like-minded individuals is here to support and celebrate your successes with you. Sign up now to start tracking your progress and join our community.",
  },
  {
    title: "Pause and resume your plan as needed, with no stress.",
    data: "We understand that life can be unpredictable, and that's why we allow you to pause and resume your plan as needed, with no stress. Whether you're going on vacation, have a busy week ahead, or simply need a break, you can take a break from your plan without worrying about falling behind. When you're ready, simply resume your plan and continue towards your health goals. Sign up now to start your plan with the peace of mind that you can pause and resume it as needed.",
  },
  {
    title: "Share your feedback and help shape the future of healthy eating.",
    data: "We value your feedback and encourage you to share it with us. By sharing your feedback, you can help shape the future of healthy eating and make a difference in the lives of others. Our community is built on collaboration and open communication, and we welcome your ideas and suggestions. Sign up now to start sharing your feedback and join our community of like-minded individuals who are committed to improving their health and well-being.",
  },
  {
    title: `Experience the power of a community of supportive, like-minded 
  individuals.`,
    data: `Join our community of supportive, like-minded individuals and experience the power of working towards your health goals together. Our community provides a safe and encouraging environment where you can connect with others, share your experiences, and learn from each other. By working together, we can achieve more than we ever could alone. Sign up now to start experiencing the power of our community and take the first step towards a healthier you.
    `,
  },
];

 
export const aboutUs: { data: string; title: string; imageUrl: string }[] = [
  {
    title: "WHY HEALTHY LAB",
    data: "We aim to provide individuals with wholesome, homemade meals that provide them with the nutirition they need while supporting their dietery goals – no shopping and no hassle needed.We carefully plan and source delicious meals that are delivered to the front door of each customer at the time most convenient for them.",
    imageUrl: "https://recipe-to-eat.s3.amazonaws.com/245/about-us-3.jpg",
  },
  {
    title: "What We Offer",
    data: "Delicious meals: Your diet will consist of meals that you’re constantly craving! Delicious dishes, with the best quality ingredients to give you the best meals Flexibility: Pick a time frame that suits you, 2 or 4 weeks of the meals you prefer, with a plan completely chosen by you! Dietarily diverse: Picky appetites welcome! Tell us what you like and don’t like, and we’ll recommend something delicious.",
    imageUrl: "https://recipe-to-eat.s3.amazonaws.com/247/about-us.jpg",
  },
  {
    title: "Benefits",
    data: `Save time: No more wasting time planning or prepping, with a meal all you have to do is pick the dishes you like! Save money: You no longer have to spend money on ingredients you won’t be using, and let’s not mention those hungry shopping trips! No more stressing: Planning new meals every day can get stressful, especially with a busy schedule. When we take care of it, there’s no more missing meals!`,
    imageUrl: "https://recipe-to-eat.s3.amazonaws.com/248/about-us-4.jpg",
  },
];
