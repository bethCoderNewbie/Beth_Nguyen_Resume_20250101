import React from 'react';

export const Tabs = ({ children, defaultValue }) => (
  <div className="w-full">{children}</div>
);

export const TabsList = ({ children, className }) => (
  <div className={`flex space-x-2 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ children, value, className }) => (
  <button className={`px-4 py-2 rounded-lg ${className}`}>{children}</button>
);

export const TabsContent = ({ children, value }) => (
  <div>{children}</div>
);
