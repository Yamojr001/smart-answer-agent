import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

export const ChatMessage = ({ message, isBot, isTyping }: ChatMessageProps) => {
  return (
    <div
      className={`flex gap-3 animate-fade-in-up ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {isBot && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full gradient-primary flex items-center justify-center shadow-glow">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
      )}
      
      <div
        className={`max-w-[80%] md:max-w-[70%] px-4 py-3 rounded-2xl ${
          isBot
            ? 'bg-card border border-border text-card-foreground rounded-tl-sm'
            : 'gradient-primary text-primary-foreground rounded-tr-sm'
        }`}
      >
        {isTyping ? (
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-2 h-2 rounded-full bg-current typing-dot" />
            <span className="w-2 h-2 rounded-full bg-current typing-dot" />
            <span className="w-2 h-2 rounded-full bg-current typing-dot" />
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};
