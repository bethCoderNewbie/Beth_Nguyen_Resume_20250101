export const Tabs = ({ children, defaultValue, className }) => (
  <div className={`w-full ${className}`}>{children}</div>
);

export const TabsList = ({ children, className }) => (
  <div className={`flex space-x-2 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ children, value, className }) => (
  <button className={`px-4 py-2 rounded-lg ${className}`}>{children}</button>
);

export const TabsContent = ({ children, value }) => (
  <div>{value}>{children}</div>
);
