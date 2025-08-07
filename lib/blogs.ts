
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  authorImageUrl: string;
  post_url: string;
}

export const dummyBlogData: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    description: "Discover the latest trends in web development, from AI-powered tools to the rise of serverless architectures. Stay ahead of the curve with our in-depth analysis.",
    author: "John Doe",
    date: "2024-01-15",
    authorImageUrl: "/image/author1.jpeg",
    post_url: "/blog/future-of-web-development"
  },
  {
    id: 2,
    title: "Mastering React: Advanced Techniques for High-Performance Apps",
    description: "Take your React skills to the next level with these advanced techniques for building fast, scalable, and maintainable applications. Learn from the experts.",
    author: "Jane Smith",
    date: "2024-02-20",
    authorImageUrl: "/image/author2.jpeg",
    post_url: "/blog/mastering-react"
  },
  {
    id: 3,
    title: "A Guide to UI/UX Design Principles for Developers",
    description: "Understand the core principles of UI/UX design to create more intuitive and user-friendly interfaces. This guide is tailored for developers who want to improve their design skills.",
    author: "Alex Johnson",
    date: "2024-03-10",
    authorImageUrl: "/image/author3.jpeg",
    post_url: "/blog/ui-ux-design-principles"
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn how to build robust, scalable APIs using Node.js and Express. This comprehensive guide covers best practices, security, and performance optimization.",
    author: "Sarah Wilson",
    date: "2024-03-25",
    authorImageUrl: "/image/author4.jpeg",
    post_url: "/blog/scalable-apis-nodejs"
  },
  {
    id: 5,
    title: "The Rise of AI in Software Development",
    description: "Explore how artificial intelligence is transforming the software development landscape. From code generation to automated testing, AI is changing everything.",
    author: "Michael Chen",
    date: "2024-04-05",
    authorImageUrl: "/image/author5.jpeg",
    post_url: "/blog/ai-in-software-development"
  },
  {
    id: 6,
    title: "Mobile-First Design: Best Practices for 2024",
    description: "Master the art of mobile-first design with these proven strategies. Learn how to create responsive, user-friendly interfaces that work seamlessly across all devices.",
    author: "Emily Rodriguez",
    date: "2024-04-18",
    authorImageUrl: "/image/author6.jpeg",
    post_url: "/blog/mobile-first-design"
  },
  {
    id: 7,
    title: "Database Optimization Techniques for High-Traffic Applications",
    description: "Discover advanced database optimization techniques to handle high-traffic applications. Learn about indexing, query optimization, and scaling strategies.",
    author: "David Kim",
    date: "2024-05-02",
    authorImageUrl: "/image/author7.jpeg",
    post_url: "/blog/database-optimization"
  },
  {
    id: 8,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    description: "Protect your web applications with these essential cybersecurity practices. Learn about common vulnerabilities and how to prevent them.",
    author: "Lisa Thompson",
    date: "2024-05-15",
    authorImageUrl: "/image/author8.jpeg",
    post_url: "/blog/cybersecurity-best-practices"
  },
  {
    id: 9,
    title: "The Complete Guide to DevOps Automation",
    description: "Streamline your development workflow with DevOps automation. This guide covers CI/CD pipelines, containerization, and infrastructure as code.",
    author: "Robert Martinez",
    date: "2024-05-28",
    authorImageUrl: "/image/author9.jpeg",
    post_url: "/blog/devops-automation-guide"
  },
  {
    id: 10,
    title: "Cloud Computing Strategies for Startups",
    description: "Learn how startups can leverage cloud computing to scale efficiently and cost-effectively. Compare different cloud providers and services.",
    author: "Amanda Foster",
    date: "2024-06-10",
    authorImageUrl: "/image/author10.jpeg",
    post_url: "/blog/cloud-computing-startups"
  },
  {
    id: 11,
    title: "Progressive Web Apps: The Future of Mobile Development",
    description: "Discover how Progressive Web Apps are bridging the gap between web and mobile applications. Learn the benefits and implementation strategies.",
    author: "James Parker",
    date: "2024-06-22",
    authorImageUrl: "/image/author11.jpeg",
    post_url: "/blog/progressive-web-apps"
  },
  {
    id: 12,
    title: "Microservices Architecture: Pros, Cons, and Best Practices",
    description: "Understand when and how to implement microservices architecture. This comprehensive guide covers design patterns, challenges, and solutions.",
    author: "Rachel Green",
    date: "2024-07-05",
    authorImageUrl: "/image/author12.jpeg",
    post_url: "/blog/microservices-architecture"
  }
];