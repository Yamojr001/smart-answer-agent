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
  },

  // =====================================================
  // FAILED TRANSFER COMPLAINTS
  // =====================================================
  {
    keywords: ['transfer', 'failed', 'unsuccessful', 'not received', 'pending', 'stuck'],
    question: "My transfer failed but I was debited",
    answer: "I'm sorry to hear about your failed transfer. Here's what typically happens:\n\n1. **Auto-Reversal**: Most failed transfers are automatically reversed within 24 hours\n2. **If not reversed after 24 hours**: Lodge a formal complaint with your bank\n3. **Required details**: Transaction date, amount, recipient details, and your transaction reference\n4. **Resolution time**: Usually 3-5 business days for investigation\n\nWould you like help filing a complaint about this issue?"
  },
  {
    keywords: ['money', 'sent', 'not', 'received', 'beneficiary', 'recipient'],
    question: "I sent money but recipient didn't receive it",
    answer: "When a transfer is sent but not received, here are the steps to resolve it:\n\n1. **Verify recipient details**: Confirm account number and bank name are correct\n2. **Check transaction status**: Review your bank statement or app for confirmation\n3. **Session timeout**: Sometimes the money is in a holding account\n4. **File a complaint**: Provide transaction reference, date, amount, sender and recipient details\n\n**Resolution**: Banks typically resolve this within 48-72 hours. If it's a wrong account transfer, it may take longer as the recipient bank needs to contact their customer."
  },
  {
    keywords: ['double', 'debit', 'charged', 'twice', 'multiple', 'deduction'],
    question: "I was debited twice for one transaction",
    answer: "Double debit issues are frustrating but resolvable. Here's what to do:\n\n1. **Don't panic**: One transaction is usually reversed automatically\n2. **Wait 24 hours**: Banks often auto-correct duplicate debits\n3. **If not resolved**: File a complaint with both transaction references\n4. **Required info**: Screenshots of both debits, dates, amounts\n\n**CBN regulation**: Banks must resolve duplicate debit complaints within 72 hours. You're entitled to a refund plus interest if it takes longer."
  },
  {
    keywords: ['reversal', 'reverse', 'refund', 'when', 'how long', 'timeline'],
    question: "How long does a transfer reversal take?",
    answer: "Transfer reversal timelines depend on the type of issue:\n\n1. **Failed transfers (same bank)**: Usually instant to 24 hours\n2. **Failed transfers (interbank)**: 24-72 hours\n3. **Wrong account transfers**: 5-14 business days (requires beneficiary cooperation)\n4. **Disputed transactions**: Up to 14 business days for investigation\n\n**CBN Guidelines**: Banks should resolve failed transaction complaints within 72 hours for amounts below ₦5,000 and 14 days for larger amounts."
  },
  {
    keywords: ['ussd', 'code', 'transfer', 'failed', '737', '901', '919', '894'],
    question: "My USSD transfer failed",
    answer: "USSD transfer failures are common. Here's how to resolve:\n\n1. **Network timeout**: Wait 5 minutes and check your balance before retrying\n2. **Session expired**: Start a fresh USSD session\n3. **Wrong PIN**: Ensure you're entering the correct transfer PIN\n4. **Daily limit reached**: Check if you've exceeded your daily transfer limit\n\n**If debited but failed**: The money usually reverses automatically within 24 hours. If not, contact your bank with the USSD session details."
  },
  {
    keywords: ['nibss', 'nip', 'instant', 'payment', 'interbank'],
    question: "My NIP/NIBSS transfer is pending",
    answer: "NIP (NIBSS Instant Payment) transfers should be instant but can sometimes get stuck:\n\n1. **Processing delay**: Usually clears within minutes to 2 hours\n2. **Bank system issue**: May take up to 24 hours during maintenance\n3. **Weekend/holiday**: Some delays possible during non-business hours\n\n**To resolve**: Contact your bank with the Session ID and NIP reference number. Banks can trace the transaction through the NIBSS system."
  },

  // =====================================================
  // ATM COMPLAINTS
  // =====================================================
  {
    keywords: ['atm', 'dispense', 'did not', 'no cash', 'debited', 'machine'],
    question: "ATM didn't dispense cash but I was debited",
    answer: "This is a common ATM issue. Here's what to do:\n\n1. **Stay at the ATM**: Note the ATM ID/location and time\n2. **Don't retry immediately**: Wait to avoid multiple debits\n3. **Get a mini statement**: If possible, print from the same ATM\n4. **Report immediately**: Call your bank's customer care or use their app\n\n**Required for complaint**: Card number (last 4 digits), ATM location, date/time, amount. Banks typically resolve ATM dispense errors within 3-5 business days.\n\n**CBN Rule**: Banks must refund ATM non-dispense cases within 3 business days or pay compensation."
  },
  {
    keywords: ['atm', 'swallow', 'ate', 'retain', 'card', 'stuck', 'captured'],
    question: "ATM swallowed/retained my card",
    answer: "If an ATM retains your card:\n\n1. **Don't leave immediately**: Wait 30 seconds - the ATM might return it\n2. **Note the ATM details**: Bank name, ATM location, time\n3. **Report to the ATM's bank**: If it's not your bank's ATM, report to both banks\n4. **Block your card**: As a precaution, request a temporary block via your app or call center\n\n**To retrieve**: Visit your bank branch with valid ID within 48 hours. If it's another bank's ATM, they'll courier it to your bank.\n\n**Tip**: Request a new card if the ATM belongs to a different bank - it's faster than waiting for retrieval."
  },
  {
    keywords: ['atm', 'partial', 'dispense', 'incomplete', 'less', 'money'],
    question: "ATM gave me less money than requested",
    answer: "Partial dispense at ATM requires immediate action:\n\n1. **Count the money at the ATM**: Do this before leaving the ATM area\n2. **Note shortage amount**: E.g., requested ₦50,000, received ₦40,000\n3. **Keep the receipt**: If the ATM printed one, keep it safe\n4. **Report immediately**: Call your bank or use mobile app\n\n**Investigation**: The bank will balance the ATM's cassette. If there's excess cash matching your shortage, you'll be refunded.\n\n**Timeline**: Usually resolved within 3-7 business days after ATM balancing."
  },
  {
    keywords: ['atm', 'wrong', 'pin', 'blocked', 'locked', 'reset'],
    question: "My ATM PIN is blocked",
    answer: "ATM PIN blocks happen after 3 wrong attempts. To resolve:\n\n1. **Visit any branch**: Bring valid ID and your debit card\n2. **Request PIN reset**: You'll get a new PIN or reset option\n3. **Mobile/Internet banking**: Some banks allow PIN reset online\n4. **Wait 24 hours**: Some blocks automatically lift after 24 hours\n\n**Prevention**: Use your bank's app to change your PIN to something memorable. Never write your PIN on or near your card."
  },
  {
    keywords: ['atm', 'error', 'transaction', 'cannot', 'unable', 'not working'],
    question: "ATM shows transaction error",
    answer: "ATM transaction errors can occur for various reasons:\n\n**Common error codes and meanings**:\n- 'Insufficient funds' - Check your available balance\n- 'Card restricted' - Call your bank immediately\n- 'Invalid card' - Card may be damaged or expired\n- 'Transaction declined' - Daily limit reached or technical issue\n- 'System error' - Try another ATM or wait 15 minutes\n\n**If debited during error**: Wait 24 hours for auto-reversal, then report if not reversed."
  },
  {
    keywords: ['atm', 'withdrawal', 'limit', 'maximum', 'how much', 'daily'],
    question: "What is the ATM withdrawal limit?",
    answer: "ATM withdrawal limits in Nigeria:\n\n**Standard limits**:\n- **Daily ATM limit**: ₦100,000 - ₦150,000 (varies by bank)\n- **Per transaction**: ₦20,000 - ₦40,000 depending on ATM\n- **POS withdrawal**: Up to ₦20,000 per transaction\n\n**To increase limit**:\n- Visit your branch with valid ID\n- Request limit increase via mobile banking (some banks)\n- Upgrade your account tier\n\n**Tip**: For larger amounts, use bank transfers or visit the branch."
  },
  {
    keywords: ['atm', 'charge', 'fee', 'deduction', 'third party'],
    question: "Why was I charged for ATM withdrawal?",
    answer: "ATM charges explained:\n\n**Your bank's ATM**: First 3 withdrawals per month are FREE. After that, you may be charged ₦35 per withdrawal\n\n**Another bank's ATM (third-party)**: ₦65 charge applies per withdrawal\n\n**Note**: These charges are regulated by CBN. If you're charged incorrectly, file a complaint for a refund.\n\n**Tip**: Use your own bank's ATM or do fewer, larger withdrawals to minimize charges."
  },

  // =====================================================
  // POS COMPLAINTS
  // =====================================================
  {
    keywords: ['pos', 'failed', 'transaction', 'debited', 'merchant', 'payment'],
    question: "POS transaction failed but I was debited",
    answer: "POS failures with debit are common. Here's what to do:\n\n1. **Get the POS receipt**: Ask the merchant for the declined slip\n2. **Don't pay cash as well**: Wait for the reversal first\n3. **Note merchant details**: Name, location, POS terminal ID\n4. **Report to your bank**: Within 24 hours for faster resolution\n\n**Resolution**: Most POS failures reverse within 24-48 hours. If not, your bank will investigate with the acquiring bank.\n\n**Tip**: Always wait for 'Approved' message before leaving the merchant."
  },
  {
    keywords: ['pos', 'decline', 'rejected', 'not', 'working', 'card'],
    question: "My card keeps declining on POS",
    answer: "Card declines on POS can happen for several reasons:\n\n1. **Insufficient balance**: Check your available balance (not book balance)\n2. **Card not activated for POS**: Enable via mobile app or call bank\n3. **Daily limit reached**: Check your POS transaction limit\n4. **Card expired**: Check expiry date on your card\n5. **Wrong PIN**: Ensure you're using the correct 4-digit PIN\n6. **Card restricted**: Bank may have flagged unusual activity\n\n**Solution**: Try another POS terminal or contact your bank to enable/unblock your card."
  },
  {
    keywords: ['pos', 'charge', 'cashback', 'withdrawal', 'agent'],
    question: "What are POS withdrawal charges?",
    answer: "POS cash withdrawal/cashback charges:\n\n**Agent POS withdrawal**: The agent sets the fee (usually 1-2% of amount, minimum ₦100)\n\n**Merchant cashback**: Some charge ₦100-₦200 per transaction\n\n**Bank charges**: Your bank doesn't charge for POS cash withdrawal, only the agent/merchant does\n\n**Maximum per transaction**: ₦20,000 (CBN limit for POS cash-out)\n\n**Tip**: Negotiate with regular agents for better rates on larger amounts."
  },

  // =====================================================
  // CARD ISSUES
  // =====================================================
  {
    keywords: ['card', 'expire', 'expired', 'renew', 'new', 'replacement'],
    question: "My debit card has expired",
    answer: "To renew your expired debit card:\n\n1. **Automatic renewal**: Some banks auto-issue new cards before expiry\n2. **Request online**: Use mobile/internet banking to request new card\n3. **Visit branch**: Bring valid ID to request card renewal\n4. **Fees**: Renewal usually costs ₦1,000 - ₦1,500\n\n**Timeline**: New cards are ready within 3-7 business days\n\n**Tip**: Update your card details on recurring payment platforms (Netflix, subscriptions) once you receive the new card."
  },
  {
    keywords: ['card', 'stolen', 'lost', 'missing', 'block', 'hotlist'],
    question: "My card was stolen/lost",
    answer: "If your card is lost or stolen, act immediately:\n\n1. **Block immediately**: Use your mobile app or call customer care\n2. **Change online banking password**: As a precaution\n3. **Report to bank**: Visit branch with valid ID within 48 hours\n4. **Request replacement**: Usually ₦1,000 - ₦1,500 for new card\n\n**Check transactions**: Review recent transactions and dispute any unauthorized ones\n\n**Police report**: Not required for card replacement but helpful for fraud disputes."
  },
  {
    keywords: ['card', 'not', 'working', 'damaged', 'chip', 'magnetic'],
    question: "My card is not working/damaged",
    answer: "If your card is damaged or not working:\n\n**Common issues**:\n- Chip not reading: Clean the chip gently with soft cloth\n- Magnetic stripe damaged: Request chip-based transactions instead\n- Card bent/cracked: Needs replacement\n\n**To replace**:\n1. Visit any branch with valid ID\n2. Request card replacement (₦1,000 - ₦1,500)\n3. Old card will be destroyed\n4. New card ready in 3-5 business days\n\n**Tip**: While waiting, use mobile banking and USSD for transactions."
  },
  {
    keywords: ['card', 'online', 'not', 'working', 'internet', 'web', 'enable'],
    question: "My card doesn't work for online payments",
    answer: "To enable your card for online/web transactions:\n\n1. **Enable online transactions**: Via mobile app under 'Card Management'\n2. **Set transaction limit**: Increase online payment limit if needed\n3. **Enable international**: For foreign websites, enable international transactions\n4. **Get OTP**: Ensure your phone number is linked for OTP\n\n**Common issues**:\n- Card not enrolled for 3D Secure\n- Wrong CVV (3 digits on back of card)\n- Billing address mismatch\n- Insufficient funds\n\n**Tip**: Some banks require you to call customer care to enable online transactions."
  },

  // =====================================================
  // ACCOUNT ISSUES
  // =====================================================
  {
    keywords: ['account', 'frozen', 'blocked', 'restricted', 'locked', 'cannot access'],
    question: "My account is frozen/restricted",
    answer: "Account restrictions happen for various reasons:\n\n**Possible causes**:\n- Suspicious activity detected\n- Court order or legal issue\n- BVN mismatch or incomplete KYC\n- Dormant account (no activity for 1+ years)\n- Post-no-debit from CBN or third party\n\n**To resolve**:\n1. Visit your branch with valid ID\n2. Provide explanation if requested\n3. Update KYC documents if needed\n4. Resolve any outstanding issues\n\n**Timeline**: Simple KYC issues resolved same day; legal matters may take longer."
  },
  {
    keywords: ['account', 'balance', 'wrong', 'incorrect', 'mismatch', 'missing'],
    question: "My account balance is incorrect",
    answer: "If your account balance doesn't match expected amount:\n\n1. **Check statement**: Download full statement from mobile app\n2. **Look for hidden charges**: SMS charges, maintenance fees, stamp duties\n3. **Pending transactions**: Some debits may be in 'hold' status\n4. **Uncredited deposits**: Check if any expected credits are missing\n\n**To dispute**:\n- List all transactions you're questioning\n- Provide supporting documents (payment receipts, etc.)\n- Submit formal complaint to bank\n\n**Resolution**: Banks must respond within 48 hours for balance inquiries."
  },
  {
    keywords: ['bvn', 'link', 'update', 'problem', 'issue', 'verification'],
    question: "I have BVN issues",
    answer: "Common BVN issues and solutions:\n\n**BVN not linked**:\n- Visit any branch with valid ID to link BVN\n- Or dial *565*0# to check your BVN\n\n**BVN mismatch**:\n- Name/DOB mismatch between BVN and account\n- Visit branch with correct documents for update\n\n**BVN correction**:\n- Go to any NIBSS enrollment center\n- Bring valid ID for data correction\n- Changes reflect in 24-48 hours\n\n**Note**: BVN cannot be changed or deleted - only data corrections are possible."
  },
  {
    keywords: ['statement', 'account', 'request', 'bank', 'history', 'transactions'],
    question: "How do I get my account statement?",
    answer: "You can get your bank statement through:\n\n1. **Mobile App**: Download PDF statement instantly (FREE)\n2. **Email request**: Some banks email statements monthly\n3. **Internet banking**: Generate and download (FREE)\n4. **Branch visit**: Request printed statement (may attract fee)\n5. **USSD**: Some banks offer statement via USSD\n\n**For official/stamped statement**:\n- Visit branch with valid ID\n- Fee: ₦500 - ₦2,000 depending on bank\n- Ready within 24-48 hours\n\n**Tip**: Mobile app statements are accepted for most purposes including visa applications."
  },

  // =====================================================
  // MOBILE/INTERNET BANKING
  // =====================================================
  {
    keywords: ['mobile', 'app', 'not', 'working', 'login', 'error', 'banking'],
    question: "Mobile banking app not working",
    answer: "Troubleshoot your mobile banking app:\n\n1. **Update the app**: Get latest version from App Store/Play Store\n2. **Clear cache**: Go to phone settings > Apps > Bank app > Clear cache\n3. **Check internet**: Ensure stable data or WiFi connection\n4. **Restart phone**: Simple restart often fixes issues\n5. **Reinstall app**: Uninstall and reinstall (you won't lose data)\n\n**If login fails**:\n- Reset password using 'Forgot Password'\n- Ensure username is correct\n- Check if account is restricted\n\n**Still not working**: Call customer care for backend reset."
  },
  {
    keywords: ['internet', 'banking', 'token', 'otp', 'not', 'receive', 'sms'],
    question: "I'm not receiving OTP/Token",
    answer: "If you're not receiving OTP or token:\n\n1. **Check phone number**: Ensure correct number is linked to account\n2. **Network issues**: Try switching from data to WiFi or vice versa\n3. **SMS blocker**: Check if your phone is blocking bank SMS\n4. **Request resend**: Wait 60 seconds and click 'Resend OTP'\n\n**Alternative options**:\n- Use hardware token if you have one\n- Use email OTP if enabled\n- Call customer care for alternative authentication\n\n**To update phone number**: Visit branch with valid ID."
  },
  {
    keywords: ['password', 'forgot', 'reset', 'change', 'login', 'pin'],
    question: "I forgot my banking password/PIN",
    answer: "To reset your password or PIN:\n\n**Mobile/Internet Banking Password**:\n1. Click 'Forgot Password' on login page\n2. Enter username and registered phone number\n3. Verify with OTP\n4. Create new password\n\n**Transaction PIN**:\n1. Log into mobile app\n2. Go to Settings > Security > Reset PIN\n3. Verify with OTP\n4. Set new PIN\n\n**ATM PIN**:\n- Visit any branch with valid ID and debit card\n- Request PIN reset (instant for most banks)\n\n**Tip**: Use a password manager to securely store your banking credentials."
  },

  // =====================================================
  // LOAN & CREDIT
  // =====================================================
  {
    keywords: ['loan', 'not', 'approved', 'rejected', 'declined', 'why'],
    question: "Why was my loan rejected?",
    answer: "Common reasons for loan rejection:\n\n1. **Low credit score**: Previous defaults or missed payments\n2. **Insufficient income**: Salary doesn't meet minimum requirement\n3. **Short employment history**: Less than 6 months with current employer\n4. **Existing loans**: Too much current debt\n5. **Account history**: New account or irregular transactions\n6. **BVN issues**: Negative records linked to your BVN\n\n**To improve chances**:\n- Clear existing debts\n- Maintain consistent salary credits\n- Keep account active for 6+ months\n- Ensure BVN has no negative flags"
  },
  {
    keywords: ['loan', 'repayment', 'deduction', 'salary', 'debit'],
    question: "Unexpected loan deduction from my salary",
    answer: "If you have unexpected loan deductions:\n\n1. **Check loan agreement**: Review terms you agreed to\n2. **Salary earner loan**: Banks auto-deduct from salary credits\n3. **Guarantor liability**: You may be paying for someone you guaranteed\n4. **Old loan**: Previous loan balance being recovered\n\n**To dispute**:\n- Request full loan statement from bank\n- Review all documents you signed\n- File formal complaint if deduction is unauthorized\n\n**Note**: If you're a guarantor, your account can be debited if the borrower defaults."
  },

  // =====================================================
  // FRAUD & SECURITY
  // =====================================================
  {
    keywords: ['scam', 'fraud', 'phishing', 'call', 'sms', 'email', 'fake'],
    question: "I received a suspicious call/SMS from 'my bank'",
    answer: "⚠️ This is likely a scam! Here's what to know:\n\n**Banks will NEVER**:\n- Call to ask for your PIN, OTP, or password\n- Send links asking you to 'verify' your account\n- Ask you to transfer money to 'secure' your account\n- Request your BVN via SMS or call\n\n**If you received such contact**:\n1. Do NOT click any links\n2. Do NOT share any information\n3. Block the number immediately\n4. Report to your bank's official line\n5. Report to CBN: 07002255226\n\n**If you already shared info**: Call your bank IMMEDIATELY to block your account."
  },
  {
    keywords: ['unauthorized', 'transaction', 'did not', 'make', 'fraud', 'hack'],
    question: "There's an unauthorized transaction on my account",
    answer: "For unauthorized transactions, act fast:\n\n1. **Block your card immediately**: Via app or call customer care\n2. **Change all passwords**: Mobile banking, internet banking\n3. **Report to bank**: Within 24 hours for best protection\n4. **Get police report**: For transactions above ₦10,000\n5. **File formal complaint**: In writing to your bank\n\n**Required documents**:\n- Disputed transaction details\n- Your statement showing the transaction\n- Police report (if applicable)\n\n**CBN protection**: You may be eligible for refund if you report within 24 hours and it's proven you didn't authorize the transaction."
  },

  // =====================================================
  // NEAREST BANK BRANCHES - MAJOR NIGERIAN BANKS
  // =====================================================
  {
    keywords: ['gtbank', 'gt', 'guaranty', 'gtb', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest GTBank branch?",
    answer: "**GTBank (Guaranty Trust Bank)** has branches nationwide. Here are key locations:\n\n**Lagos**:\n- Head Office: 635 Akin Adesola Street, Victoria Island\n- Ikeja: 30 Toyin Street, Ikeja\n- Lekki: 1A Admiralty Road, Lekki Phase 1\n- Marina: 167 Broad Street, Marina\n\n**Abuja**:\n- Garki: Plot 1679 Sanusi Fafunwa Street, Garki\n- Wuse 2: Plot 4 Aminu Kano Crescent\n\n**Other cities**: Port Harcourt, Kano, Ibadan, Benin, etc.\n\n**Find nearest branch**: Visit gtbank.com/locate or use GTWorld app. Customer Care: 0700 482 66328"
  },
  {
    keywords: ['first bank', 'firstbank', 'fbn', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest First Bank branch?",
    answer: "**First Bank of Nigeria** has the largest branch network:\n\n**Lagos**:\n- Head Office: Samuel Asabia House, 35 Marina\n- Victoria Island: 1436 Sanusi Fafunwa Street\n- Ikeja: 156 Obafemi Awolowo Way\n\n**Abuja**:\n- Garki: Plot 1045 Shehu Shagari Way\n- Central Area: Plot 770 Constitution Avenue\n\n**Port Harcourt**: 91 Aba Road\n**Kano**: 8 Bello Road\n\n**Find nearest**: Download FirstMobile app or visit firstbanknigeria.com/branch-locator. Customer Care: 0700-FIRSTCONTACT (0700-34778-2668228)"
  },
  {
    keywords: ['zenith', 'zenith bank', 'zb', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Zenith Bank branch?",
    answer: "**Zenith Bank** branches nationwide:\n\n**Lagos**:\n- Head Office: Zenith Heights, 87 Ajose Adeogun Street, V/I\n- Ikeja: 25 Aromire Avenue\n- Lekki: 1 Admiralty Way, Lekki Phase 1\n\n**Abuja**:\n- Central Area: Plot 83/84 Ralph Shodeinde Street\n- Wuse 2: 54 Dar es Salaam Crescent\n\n**Port Harcourt**: 1 Evo Road, GRA\n**Kano**: 1 Bello Road\n\n**Find nearest**: Visit zenithbank.com/branch-atm-locator or call 234-1-2927000, 0700-ZENITHBANK"
  },
  {
    keywords: ['uba', 'united bank', 'africa', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest UBA branch?",
    answer: "**United Bank for Africa (UBA)** locations:\n\n**Lagos**:\n- Head Office: 57 Marina, Lagos Island\n- Victoria Island: Plot 1088 Adeola Hopewell Street\n- Ikeja: 105 Allen Avenue\n\n**Abuja**:\n- Garki: Plot 535 Ahmadu Bello Way\n- Wuse 2: 8 Cairo Street\n\n**Port Harcourt**: 2 Azikiwe Road\n**Kano**: 72 Bompai Road\n\n**Find nearest**: Use UBA Mobile app, visit ubagroup.com/branch-locator or call 0700-CALL-UBA (0700-2255-822)"
  },
  {
    keywords: ['access', 'access bank', 'diamond', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Access Bank branch?",
    answer: "**Access Bank** (merged with Diamond Bank) branches:\n\n**Lagos**:\n- Head Office: 999C Danmole Street, Victoria Island\n- Ikeja: 16 Opebi Road\n- Lekki: 19 Admiralty Way\n\n**Abuja**:\n- Garki: 33 Pope John Paul II Street\n- Wuse 2: 40 Libreville Street\n\n**Port Harcourt**: 4 Forces Avenue, Old GRA\n**Kano**: 50 Murtala Muhammad Way\n\n**Find nearest**: Download Access More app or visit accessbankplc.com/branch-locator. Customer Care: 01-2712005, 0700-ACCESSBANK"
  },
  {
    keywords: ['stanbic', 'ibtc', 'stanbic ibtc', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Stanbic IBTC branch?",
    answer: "**Stanbic IBTC Bank** locations:\n\n**Lagos**:\n- Head Office: Stanbic IBTC Towers, 100 Walter Carrington Crescent, V/I\n- Ikeja: 7 Opebi Road\n- Lekki: 6 Admiralty Way\n\n**Abuja**:\n- Central Area: Plot 1713, Gudu District\n- Wuse 2: 31 Haile Selassie Street\n\n**Port Harcourt**: 65 Aba Road\n**Kano**: 29 Murtala Muhammad Way\n\n**Find nearest**: Visit stanbicibtc.com or call 01-4227070, 0700-STANBICIBTC"
  },
  {
    keywords: ['union', 'union bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Union Bank branch?",
    answer: "**Union Bank of Nigeria** branches:\n\n**Lagos**:\n- Head Office: Stallion Plaza, 36 Marina\n- Victoria Island: 1A Ozumba Mbadiwe Avenue\n- Ikeja: 46 Opebi Road\n\n**Abuja**:\n- Garki: Plot 268 Muhammed Buhari Way\n- Wuse 2: 10 Aminu Kano Crescent\n\n**Port Harcourt**: 31 Aba Road\n**Kano**: 2 Bank Road\n\n**Find nearest**: Use Union Mobile app or visit unionbankng.com. Customer Care: 07007-UNION-BANK"
  },
  {
    keywords: ['fidelity', 'fidelity bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Fidelity Bank branch?",
    answer: "**Fidelity Bank** locations:\n\n**Lagos**:\n- Head Office: 2 Kofo Abayomi Street, Victoria Island\n- Ikeja: 11 Isaac John Street, GRA\n- Lekki: 7 Admiralty Way, Lekki Phase 1\n\n**Abuja**:\n- Garki: 9 Ahmadu Bello Way\n- Wuse 2: 2 Da es Salaam Street\n\n**Port Harcourt**: 139 Aba Road\n**Kano**: 10 Murtala Muhammad Way\n\n**Find nearest**: Visit fidelitybank.ng/branch-locator or call 0700-FIDELITY, 01-4485252"
  },
  {
    keywords: ['fcmb', 'first city', 'monument', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest FCMB branch?",
    answer: "**First City Monument Bank (FCMB)** branches:\n\n**Lagos**:\n- Head Office: Primrose Towers, 17A Tinubu Street, Lagos Island\n- Ikeja: 20 Toyin Street\n- Victoria Island: 50B Ademola Adetokunbo Street\n\n**Abuja**:\n- Garki: Plot 1241 Ladoke Akintola Boulevard\n- Wuse: 4 Ademola Adetokunbo Crescent\n\n**Port Harcourt**: 33 Aba Road\n**Kano**: 42 Murtala Muhammad Way\n\n**Find nearest**: Visit fcmb.com/branch-locator or call 01-2792728, 0700-FCMB-FCMB"
  },
  {
    keywords: ['sterling', 'sterling bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Sterling Bank branch?",
    answer: "**Sterling Bank** locations:\n\n**Lagos**:\n- Head Office: 20 Marina, Lagos Island\n- Ikeja: 34 Toyin Street\n- Victoria Island: 39 Adeola Odeku Street\n\n**Abuja**:\n- Garki: Plot 1029 Abubakar Koko Street\n- Wuse 2: 40 Aminu Kano Crescent\n\n**Port Harcourt**: 19 Port Harcourt/Aba Road\n**Kano**: 12 Murtala Muhammad Way\n\n**Find nearest**: Visit sterling.ng or call 0700-STERLING"
  },
  {
    keywords: ['wema', 'wema bank', 'alat', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Wema Bank branch?",
    answer: "**Wema Bank** (home of ALAT digital banking) branches:\n\n**Lagos**:\n- Head Office: 54 Marina, Lagos Island\n- Ikeja: 17 Medical Road\n- Victoria Island: 4 Afribank Street\n\n**Abuja**:\n- Garki: 2 Dar es Salaam Street\n- Wuse 2: 67 Ademola Adetokunbo Crescent\n\n**Port Harcourt**: 25 Aba Road\n**Ibadan**: 54 Lebanon Street\n\n**Digital option**: Download ALAT by Wema app for branchless banking. Customer Care: 01-4546400, 0700-WEMABANK"
  },
  {
    keywords: ['polaris', 'skye', 'polaris bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Polaris Bank branch?",
    answer: "**Polaris Bank** (formerly Skye Bank) locations:\n\n**Lagos**:\n- Head Office: 3 Akin Adesola Street, Victoria Island\n- Ikeja: 94/96 Allen Avenue\n- Apapa: 2 Liverpool Road\n\n**Abuja**:\n- Central Area: 7 I.T. Igbani Street\n- Wuse 2: 31 Lake Chad Crescent\n\n**Port Harcourt**: 151 Aba Road\n**Kano**: 5 Bompai Road\n\n**Find nearest**: Visit polarisbanklimited.com or call 01-2702540"
  },
  {
    keywords: ['ecobank', 'eco', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Ecobank branch?",
    answer: "**Ecobank Nigeria** branches:\n\n**Lagos**:\n- Head Office: 21 Ahmadu Bello Way, Victoria Island\n- Ikeja: 10 Allen Avenue\n- Marina: 264 Marina Road\n\n**Abuja**:\n- Central Area: 2 Ajose Adeogun Street\n- Garki: Plot 53 Adetokunbo Ademola Crescent\n\n**Port Harcourt**: 28 Aba Road\n**Kano**: 7 Murtala Muhammad Way\n\n**Find nearest**: Use Ecobank Mobile app or visit ecobank.com/nigeria. Customer Care: 0700-ECOBANK-234"
  },
  {
    keywords: ['keystone', 'keystone bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Keystone Bank branch?",
    answer: "**Keystone Bank** locations:\n\n**Lagos**:\n- Head Office: Keystone Bank House, 1 Keystone Crescent, Victoria Island\n- Ikeja: 16 Allen Avenue\n- Apapa: 4 Apapa Oshodi Expressway\n\n**Abuja**:\n- Central Area: Plot 7 Olusegun Obasanjo Way\n- Wuse 2: 6 Lobito Crescent\n\n**Port Harcourt**: 45 Aba Road\n**Kano**: 57 Ibrahim Taiwo Road\n\n**Find nearest**: Visit keystonebankng.com or call 01-2600570"
  },
  {
    keywords: ['heritage', 'heritage bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Heritage Bank branch?",
    answer: "**Heritage Bank** branches:\n\n**Lagos**:\n- Head Office: 292C Ajose Adeogun Street, Victoria Island\n- Ikeja: 40 Allen Avenue\n- Ikorodu: 36 Lagos Road\n\n**Abuja**:\n- Garki: 56 Kaura Namoda Street\n- Wuse: Plot 213 Cadastral Zone\n\n**Port Harcourt**: 17 Forces Avenue\n**Kano**: 73 Bompai Road\n\n**Find nearest**: Visit hfrw.ng/branch-locator or call 0700-HERITAGE"
  },
  {
    keywords: ['providus', 'providus bank', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Providus Bank branch?",
    answer: "**Providus Bank** locations:\n\n**Lagos**:\n- Head Office: 54/56 Broad Street, Lagos Island\n- Victoria Island: 47B Adeola Odeku Street\n- Ikeja: 8 Opebi Road\n\n**Abuja**:\n- Central Area: Plot 1096 Cadastral Zone\n- Wuse 2: 7 Libreville Crescent\n\n**Port Harcourt**: 17 Forces Avenue, Old GRA\n\n**Find nearest**: Visit providusbank.com or call 0700-PROVIDUS"
  },
  {
    keywords: ['jaiz', 'jaiz bank', 'islamic', 'branch', 'nearest', 'location', 'address'],
    question: "Where is the nearest Jaiz Bank branch?",
    answer: "**Jaiz Bank** (Islamic/Non-Interest Banking) locations:\n\n**Abuja** (Head Office city):\n- Head Office: Kado District, Plot 764 Cadastral Zone\n- Wuse: Plot 1053 Abubakar Koko Avenue\n- Garki: Plot 78 Ralph Shodeinde Street\n\n**Lagos**:\n- Victoria Island: Plot 1677, Sanusi Fafunwa Street\n- Ikeja: 29 Allen Avenue\n\n**Kano**: 25 Murtala Muhammad Way\n\n**Find nearest**: Visit jfrw.ng or call 0700-CALL-JAIZ"
  },
  {
    keywords: ['opay', 'palmpay', 'kuda', 'moniepoint', 'digital', 'fintech', 'bank'],
    question: "Where are digital bank branches like OPay, Kuda, PalmPay?",
    answer: "**Digital banks** like OPay, Kuda, PalmPay, and Moniepoint are primarily **branchless** - they operate through mobile apps.\n\n**For support**:\n\n**OPay**: \n- Customer Care: 01-8889977\n- In-app chat support\n\n**Kuda**:\n- In-app chat only (no phone number)\n- Email: help@kuda.com\n\n**PalmPay**:\n- Customer Care: 01-4483747\n- In-app support\n\n**Moniepoint**:\n- Website: moniepoint.com\n- Agent network nationwide\n\n**Tip**: For cash services, use their agent networks (OPay Points, PalmPay Agents) across Nigeria."
  },

  // =====================================================
  // GENERAL BANKING QUERIES
  // =====================================================
  {
    keywords: ['open', 'account', 'new', 'create', 'register', 'sign up'],
    question: "How do I open a bank account?",
    answer: "To open a bank account in Nigeria:\n\n**Required documents**:\n- Valid ID (NIN, Passport, Driver's License, Voter's Card)\n- Passport photograph\n- Proof of address (utility bill)\n- BVN (Bank Verification Number)\n\n**Options**:\n1. **Branch visit**: Bring documents to any branch\n2. **Online/App**: Many banks offer digital account opening\n3. **Tier 1 (no docs)**: Limited account, can upgrade later\n\n**Account types**: Savings, Current, Domiciliary (foreign currency)\n\n**Tip**: Download the bank's app and open account in minutes - upgrade with documents later."
  },
  {
    keywords: ['charges', 'fees', 'deductions', 'maintenance', 'sms', 'stamp'],
    question: "What are common bank charges?",
    answer: "Common Nigerian bank charges:\n\n**Monthly/Regular**:\n- SMS alert: ₦50/month\n- Account maintenance: ₦1 per mille (0.1% on debit)\n- Stamp duty: ₦50 per transaction above ₦10,000\n- Card maintenance: ₦100-₦200/month\n\n**Transaction fees**:\n- Transfer below ₦5,000: Usually free\n- Transfer ₦5,000-₦50,000: ₦10-₦25\n- Transfer above ₦50,000: ₦50\n- ATM (other bank): ₦65 per withdrawal\n\n**VAT**: 7.5% on all bank charges\n\n**Tip**: Use your bank's app for free transfers and check settings to minimize SMS charges."
  },
  {
    keywords: ['close', 'account', 'closure', 'terminate', 'delete'],
    question: "How do I close my bank account?",
    answer: "To close a bank account:\n\n1. **Clear all obligations**: Loans, overdrafts, standing orders\n2. **Withdraw/transfer balance**: Move remaining funds\n3. **Visit branch**: Bring valid ID and debit card\n4. **Fill closure form**: State reason for closure\n5. **Return cards/cheques**: Hand over all bank property\n\n**Processing time**: 1-3 business days\n\n**Note**: \n- Cannot close account with outstanding loan\n- Ensure no pending credits expected\n- Get account closure confirmation letter"
  },
  {
    keywords: ['customer', 'care', 'contact', 'helpline', 'phone', 'number', 'support'],
    question: "What are Nigerian bank customer care numbers?",
    answer: "**Major Nigerian Bank Customer Care Numbers**:\n\n📞 **GTBank**: 0700 482 66328\n📞 **First Bank**: 0700 34778 2668228\n📞 **Zenith Bank**: 0700 ZENITHBANK\n📞 **UBA**: 0700 2255 822\n📞 **Access Bank**: 0700 ACCESS BANK\n📞 **Stanbic IBTC**: 01 422 7000\n📞 **Fidelity Bank**: 0700 FIDELITY\n📞 **FCMB**: 01 279 2728\n📞 **Sterling Bank**: 0700 STERLING\n📞 **Wema Bank**: 0700 WEMA BANK\n\n**CBN Consumer Protection**: 07002255226\n\n**Tip**: Most banks also offer 24/7 chat support via their mobile apps."
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
  "My transfer failed but I was debited",
  "ATM didn't give me money",
  "Where is nearest GTBank?",
  "My card was stolen",
  "I received a scam call",
  "How to open a bank account?"
];
