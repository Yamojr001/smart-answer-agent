// SmartServe AI Knowledge Base - Comprehensive Q&A Database
// All matching is case-insensitive with fuzzy matching support

export interface QAPair {
  keywords: string[];
  question: string;
  answer: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: string;
}

// Simulated user database
let users: User[] = [];

export const registerUser = (email: string, password: string, name: string): { success: boolean; message: string; user?: User } => {
  const normalizedEmail = email.toLowerCase().trim();
  
  if (!email || !password || !name) {
    return { success: false, message: "Please fill in all fields." };
  }
  
  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters." };
  }
  
  const existingUser = users.find(u => u.email === normalizedEmail);
  if (existingUser) {
    return { success: false, message: "An account with this email already exists." };
  }
  
  const newUser: User = {
    id: `user_${Date.now()}`,
    email: normalizedEmail,
    password,
    name: name.trim(),
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem('smartserve_users', JSON.stringify(users));
  
  return { success: true, message: "Registration successful!", user: newUser };
};

export const loginUser = (email: string, password: string): { success: boolean; message: string; user?: User } => {
  const normalizedEmail = email.toLowerCase().trim();
  
  // Load users from localStorage
  const storedUsers = localStorage.getItem('smartserve_users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
  
  const user = users.find(u => u.email === normalizedEmail && u.password === password);
  
  if (user) {
    return { success: true, message: "Login successful!", user };
  }
  
  return { success: false, message: "Invalid email or password." };
};

export const logoutUser = (): void => {
  localStorage.removeItem('smartserve_current_user');
};

export const getCurrentUser = (): User | null => {
  const storedUser = localStorage.getItem('smartserve_current_user');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem('smartserve_current_user', JSON.stringify(user));
};

// Comprehensive Q&A Knowledge Base
export const knowledgeBase: QAPair[] = [
  // GENERAL INFORMATION
  {
    keywords: ['what', 'smartserve', 'about', 'overview', 'explain', 'tell me'],
    question: "What is SmartServe?",
    answer: "SmartServe is an AI-powered platform designed to transform how Nigerian banks handle customer complaints. It seamlessly integrates automated analysis with robust digital customer service support, addressing critical pain points to enhance efficiency and customer satisfaction. SmartServe collects complaints from all banking channels and leverages machine learning for sophisticated analysis and swift action."
  },
  {
    keywords: ['who', 'made', 'created', 'built', 'developed', 'gansma'],
    question: "Who created SmartServe?",
    answer: "SmartServe was created by GANSMA, a team dedicated to revolutionizing complaint management for Nigerian financial institutions through innovative AI-powered solutions."
  },
  {
    keywords: ['why', 'need', 'important', 'purpose', 'reason'],
    question: "Why is SmartServe needed?",
    answer: "Nigerian banks face an immense influx of customer complaints daily from multiple channels including mobile apps, USSD, ATMs, POS terminals, call centres, and social media. The prevalent manual processing leads to slow response times, poor customer experience, repeated follow-ups, and high staff workload. SmartServe addresses all these challenges through intelligent automation."
  },
  {
    keywords: ['how', 'work', 'works', 'function', 'process', 'flow'],
    question: "How does SmartServe work?",
    answer: "SmartServe follows a seamless 5-step process: 1) Submit - Customers submit complaints through any channel, 2) Receive - The system receives and logs all complaints, 3) Analyse - AI engine analyses the complaint text, 4) Classify - Issues are categorized and prioritized, 5) Dashboard - Staff view and manage through comprehensive analytics. This ensures precision and speed from submission to resolution."
  },
  
  // FEATURES
  {
    keywords: ['feature', 'features', 'capability', 'capabilities', 'what can', 'functions'],
    question: "What are SmartServe's core features?",
    answer: "SmartServe offers four core capabilities: 1) Intelligent Text Analysis - Deep linguistic analysis using ML models, 2) Accurate Category Identification - Precise classification of complaints (failed transfers, ATM issues, fraud), 3) Dynamic Priority Assignment - High/medium/low priority levels, 4) Smart Escalation & Routing - Automatic routing to appropriate teams for faster resolution."
  },
  {
    keywords: ['ai', 'analysis', 'analyze', 'machine learning', 'ml', 'artificial intelligence'],
    question: "How does the AI analysis work?",
    answer: "Our AI engine performs deep linguistic analysis using machine learning models to understand the nuances of each customer complaint. It accurately analyzes complaint text, categorizing issues such as failed transfers, ATM problems, and fraud cases, while automatically assigning appropriate priority levels."
  },
  {
    keywords: ['category', 'categories', 'classify', 'classification', 'types', 'complaint types'],
    question: "What complaint categories does SmartServe handle?",
    answer: "SmartServe can classify complaints into multiple categories including: failed transfers, ATM issues, POS problems, fraud cases, account-related issues, card problems, loan disputes, mobile banking issues, USSD failures, and general service complaints. The AI continuously learns to identify new patterns."
  },
  {
    keywords: ['priority', 'prioritize', 'urgent', 'urgency', 'levels'],
    question: "How are complaints prioritized?",
    answer: "SmartServe uses Dynamic Priority Assignment to categorize complaints as High, Medium, or Low priority. High-priority complaints (like fraud cases) receive immediate attention and are automatically escalated. This ensures critical issues are never delayed while routine queries are handled efficiently."
  },
  {
    keywords: ['escalate', 'escalation', 'routing', 'route', 'assign'],
    question: "How does escalation and routing work?",
    answer: "SmartServe's Smart Escalation & Routing feature automatically directs urgent complaints to the appropriate specialized teams for faster resolution. Complex cases are seamlessly escalated to human agents while the AI handles common queries, minimizing customer wait times."
  },
  {
    keywords: ['digital', 'service', 'layer', 'automated', 'response', 'instant'],
    question: "What is the Digital Customer Service Layer?",
    answer: "The Digital Customer Service Layer is an integrated component that provides instant responses to common customer queries. It efficiently handles routine questions automatically while escalating complex cases to human agents, ensuring 24/7 availability and immediate assistance."
  },
  {
    keywords: ['channel', 'channels', 'platform', 'platforms', 'sources', 'where'],
    question: "What channels does SmartServe support?",
    answer: "SmartServe collects complaints from all banking channels including: Mobile Apps, USSD, ATMs, POS Terminals, Call Centres, Social Media platforms, Email, Web portals, and Branch walk-ins. All complaints are centralized into one unified platform for management."
  },
  {
    keywords: ['dashboard', 'analytics', 'reports', 'reporting', 'insights', 'trends'],
    question: "What analytics and reporting does SmartServe offer?",
    answer: "SmartServe provides a comprehensive dashboard with actionable insights into recurring complaint patterns and problem areas. You get clear visibility of trends, detailed analytics, and customizable reports to help identify systemic issues and drive continuous improvement."
  },
  
  // BENEFITS
  {
    keywords: ['benefit', 'benefits', 'advantage', 'advantages', 'value', 'gain'],
    question: "What are the benefits of using SmartServe?",
    answer: "SmartServe delivers three key benefits: 1) Faster Resolution - Significantly reduces time to address complaints, 2) Enhanced Satisfaction - Improved handling leads to happier, loyal customers, 3) Optimised Workload - Alleviates pressure on staff, allowing focus on complex issues. Additionally, you gain clear visibility of trends, improved regulatory compliance, and data-driven insights."
  },
  {
    keywords: ['fast', 'faster', 'speed', 'quick', 'time', 'resolution time'],
    question: "How does SmartServe improve resolution speed?",
    answer: "SmartServe significantly reduces complaint resolution time through automated analysis, instant categorization, smart prioritization, and automatic routing to appropriate teams. What once took days can now be resolved in hours, and common queries get instant automated responses."
  },
  {
    keywords: ['customer', 'satisfaction', 'experience', 'happy', 'improve'],
    question: "How does SmartServe improve customer satisfaction?",
    answer: "By dramatically reducing wait times, providing instant responses to common queries, ensuring consistent handling, and keeping customers informed throughout the process, SmartServe transforms the complaint experience. This leads to happier customers and strengthened brand reputation."
  },
  {
    keywords: ['staff', 'workload', 'employees', 'team', 'efficiency', 'burnout'],
    question: "How does SmartServe help customer service staff?",
    answer: "SmartServe alleviates pressure on customer service teams by automating routine complaints and providing intelligent tools for complex cases. This reduces burnout, increases productivity, and allows staff to focus on high-value interactions and proactive customer engagement."
  },
  {
    keywords: ['compliance', 'regulation', 'regulatory', 'cbn', 'audit', 'auditable'],
    question: "How does SmartServe help with regulatory compliance?",
    answer: "SmartServe ensures adherence to all banking regulations by maintaining a structured and fully auditable complaint management system. Every complaint is logged, tracked, and archived with complete history, making regulatory reporting and audits straightforward."
  },
  {
    keywords: ['strategic', 'decision', 'decisions', 'data', 'insight', 'improve'],
    question: "How does SmartServe support strategic decisions?",
    answer: "SmartServe provides data-driven insights through its analytics dashboard, helping you identify patterns, systemic issues, and opportunities for improvement. This enables informed strategic decisions to refine services, products, and operational processes."
  },
  
  // TARGET CUSTOMERS
  {
    keywords: ['who', 'target', 'customers', 'banks', 'institutions', 'partner'],
    question: "Who can use SmartServe?",
    answer: "SmartServe is designed for diverse Nigerian financial institutions: Commercial Banks (high-volume complaint resolution), Digital Banks (enhanced digital-first experience), Fintech Companies (seamless integration with innovative products), and Microfinance Banks (efficient, scalable solutions). We partner with institutions of all sizes."
  },
  {
    keywords: ['commercial', 'bank', 'banks', 'big', 'large'],
    question: "How does SmartServe help commercial banks?",
    answer: "Commercial banks benefit from SmartServe's ability to streamline high-volume complaint resolution for large customer bases. Our AI handles the massive influx of daily complaints while ensuring each customer receives timely, personalized attention."
  },
  {
    keywords: ['digital', 'bank', 'neobank', 'online'],
    question: "How does SmartServe help digital banks?",
    answer: "Digital banks leverage SmartServe to enhance their digital-first customer experience with fully automated support. The seamless integration matches the modern, tech-savvy expectations of digital banking customers."
  },
  {
    keywords: ['fintech', 'startup', 'innovation', 'integrate'],
    question: "How does SmartServe help fintech companies?",
    answer: "Fintech companies benefit from SmartServe's ability to integrate seamless complaint management into their innovative financial products. Our APIs and flexible architecture make embedding customer support into any fintech solution straightforward."
  },
  {
    keywords: ['microfinance', 'micro', 'mfb', 'small', 'scale'],
    question: "How does SmartServe help microfinance banks?",
    answer: "Microfinance banks gain efficient, scalable solutions that grow with their customer demands. SmartServe's cost-effective model ensures even smaller institutions can provide world-class complaint management without massive infrastructure investment."
  },
  
  // PRICING & BUSINESS MODEL
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'fee', 'subscription'],
    question: "What is SmartServe's pricing model?",
    answer: "SmartServe offers flexible, scalable revenue models: 1) Subscription Licensing - Annual or monthly access to the full platform, 2) Volume-Based Pricing - Tailored to complaints processed, cost-effective for all institution sizes, 3) Premium Features & Analytics - Optional upgrades for advanced dashboards and bespoke reporting."
  },
  {
    keywords: ['subscription', 'license', 'licensing', 'access'],
    question: "How does subscription licensing work?",
    answer: "With Subscription Licensing, you get full access to the SmartServe platform through an annual or monthly subscription. This includes all core features, regular updates, and standard support. Contact our team for customized pricing based on your institution's needs."
  },
  {
    keywords: ['volume', 'per complaint', 'transaction', 'usage'],
    question: "How does volume-based pricing work?",
    answer: "Volume-Based Pricing structures costs based on the number of complaints processed, ensuring cost-effectiveness for institutions of all sizes. You only pay for what you use, making it ideal for growing institutions or those with variable complaint volumes."
  },
  {
    keywords: ['premium', 'advanced', 'upgrade', 'custom', 'bespoke'],
    question: "What premium features are available?",
    answer: "Premium Features include advanced dashboards with real-time analytics, in-depth trend analysis, bespoke reporting capabilities, custom integrations, dedicated support, and enhanced AI models. These optional upgrades help maximize the value of your SmartServe investment."
  },
  
  // TECHNICAL & SUPPORT
  {
    keywords: ['integrate', 'integration', 'api', 'connect', 'setup'],
    question: "How do I integrate SmartServe with my systems?",
    answer: "SmartServe provides comprehensive APIs and integration tools to connect with your existing banking infrastructure. Our technical team assists with setup, ensuring seamless integration with your core banking system, CRM, and other platforms. The onboarding process typically takes 2-4 weeks."
  },
  {
    keywords: ['support', 'help', 'contact', 'assistance', 'service'],
    question: "What support does SmartServe provide?",
    answer: "SmartServe offers comprehensive support including: Technical implementation assistance, Training for your team, 24/7 system monitoring, Dedicated account management, Regular system updates, and On-demand troubleshooting. Premium support options are available for enhanced SLAs."
  },
  {
    keywords: ['security', 'secure', 'safe', 'data', 'privacy', 'protection'],
    question: "Is SmartServe secure?",
    answer: "Absolutely! SmartServe is built with bank-grade security including end-to-end encryption, secure data storage, role-based access controls, audit trails, and compliance with Nigerian data protection regulations. Your customer data is protected at every step."
  },
  {
    keywords: ['start', 'started', 'begin', 'demo', 'trial', 'try'],
    question: "How do I get started with SmartServe?",
    answer: "Getting started is easy! Contact our team for a personalized demo where we'll show you SmartServe in action. We'll assess your needs, provide a customized proposal, and guide you through implementation. Request a demo today to see how SmartServe can transform your complaint management."
  },
  
  // COMPLAINT HANDLING
  {
    keywords: ['file', 'lodge', 'submit', 'make', 'complaint', 'register complaint'],
    question: "How can I file a complaint?",
    answer: "You can file a complaint through any of our supported channels: Mobile App, USSD, ATM, POS, Call Centre, Social Media, Email, or Web Portal. Simply describe your issue and our AI will automatically categorize, prioritize, and route it to the appropriate team for swift resolution."
  },
  {
    keywords: ['track', 'status', 'check', 'follow up', 'update', 'progress'],
    question: "How can I track my complaint status?",
    answer: "Once you submit a complaint, you'll receive a unique reference number. Use this to track your complaint status through our portal or by contacting our support team. SmartServe keeps you informed at every stage with automatic status updates."
  },
  {
    keywords: ['failed', 'transfer', 'transaction', 'debit', 'money', 'reversal'],
    question: "What happens with failed transfer complaints?",
    answer: "Failed transfer complaints are automatically identified and prioritized by SmartServe. The AI verifies transaction details, categorizes the issue, and routes it to the appropriate team for investigation. Most failed transfer issues are resolved within 24-48 hours with automatic reversal processing where applicable."
  },
  {
    keywords: ['atm', 'machine', 'cash', 'dispense', 'withdrawal'],
    question: "How are ATM complaints handled?",
    answer: "ATM-related complaints (non-dispensing, partial dispensing, card retention) are immediately flagged and categorized. SmartServe coordinates with the relevant teams to investigate, initiate reversals where needed, and ensure prompt resolution. The AI also identifies patterns in ATM issues for preventive maintenance."
  },
  {
    keywords: ['fraud', 'scam', 'unauthorized', 'stolen', 'suspicious'],
    question: "How are fraud complaints handled?",
    answer: "Fraud complaints are automatically assigned the highest priority. SmartServe immediately alerts the fraud team, initiates account protection measures, and begins investigation. Our AI helps identify fraud patterns and potential linked cases for comprehensive protection."
  },
  
  // GREETING & GENERAL
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    question: "Hello!",
    answer: "Hello! Welcome to SmartServe AI Assistant. I'm here to help you learn about SmartServe, Nigeria's leading AI-powered complaint management platform. How can I assist you today? You can ask me about our features, benefits, pricing, or anything else!"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    question: "Thank you!",
    answer: "You're welcome! I'm glad I could help. If you have any more questions about SmartServe or need assistance, feel free to ask anytime. Have a great day!"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'exit'],
    question: "Goodbye!",
    answer: "Goodbye! Thank you for learning about SmartServe. If you ever have more questions or want to explore how we can transform your complaint management, we're here to help. Take care!"
  }
];

// Fuzzy matching function
const calculateSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  if (s1 === s2) return 1;
  if (s1.includes(s2) || s2.includes(s1)) return 0.8;
  
  const words1 = s1.split(/\s+/);
  const words2 = s2.split(/\s+/);
  
  let matches = 0;
  for (const w1 of words1) {
    for (const w2 of words2) {
      if (w1 === w2 || w1.includes(w2) || w2.includes(w1)) {
        matches++;
      }
    }
  }
  
  return matches / Math.max(words1.length, words2.length);
};

// Find best matching answer (case-insensitive)
export const findAnswer = (userInput: string): string => {
  const normalizedInput = userInput.toLowerCase().trim();
  
  if (!normalizedInput) {
    return "Please type a question or message, and I'll do my best to help you learn about SmartServe!";
  }
  
  let bestMatch: QAPair | null = null;
  let bestScore = 0;
  
  for (const qa of knowledgeBase) {
    // Check keyword matches
    let keywordScore = 0;
    for (const keyword of qa.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        keywordScore += 0.3;
      }
    }
    
    // Check question similarity
    const questionScore = calculateSimilarity(normalizedInput, qa.question);
    
    const totalScore = keywordScore + questionScore;
    
    if (totalScore > bestScore) {
      bestScore = totalScore;
      bestMatch = qa;
    }
  }
  
  if (bestMatch && bestScore > 0.2) {
    return bestMatch.answer;
  }
  
  return "I'm not sure I understand that question. Could you try rephrasing? You can ask me about SmartServe's features, benefits, pricing, how it works, complaint handling, or any other aspect of our AI-powered platform. For example, try asking 'What is SmartServe?' or 'How does the AI analysis work?'";
};

export const suggestedQuestions = [
  "What is SmartServe?",
  "How does SmartServe work?",
  "What are the key features?",
  "What are the benefits?",
  "How is pricing structured?",
  "How can I file a complaint?",
  "Who can use SmartServe?"
];
