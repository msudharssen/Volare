import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

/**
 * Statscard Component
 * A reusable statistics card component styled similar to shadcn/ui dashboard
 * 
 * @param {string} title - The card title (e.g., "Total Revenue")
 * @param {string|number} value - The main statistic value (e.g., "$45,231.89")
 * @param {string} description - Footer description (e.g., "Visitors for the last 6 months")
 * @param {number} change - Percentage change (e.g., 12.5 or -20)
 * @param {string} changeText - Text describing the change (e.g., "Trending up this month")
 * @param {React.ElementType} icon - Lucide icon component to display
 * @param {string} trend - "up" | "down" | "neutral" - determines trend indicator
 */
const Statscard = ({
  title = "Total Revenue",
  value = "$0.00",
  description = "Statistics for the selected period",
  change = 0,
  changeText = "",
  icon: Icon,
  trend = "neutral",
}) => {
  // Determine trend based on change value if not explicitly provided
  const determinedTrend = trend || (change > 0 ? "up" : change < 0 ? "down" : "neutral");

  // Get trend icon component
  const getTrendIcon = () => {
    switch (determinedTrend) {
      case "up":
        return <TrendingUp className="h-4 w-4" />;
      case "down":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  // Get trend color classes
  const getTrendColorClass = () => {
    switch (determinedTrend) {
      case "up":
        return "text-emerald-500 dark:text-emerald-400";
      case "down":
        return "text-red-500 dark:text-red-400";
      default:
        return "text-muted-foreground";
    }
  };

  // Get badge variant based on trend
  const getBadgeVariant = () => {
    switch (determinedTrend) {
      case "up":
        return "default";
      case "down":
        return "destructive";
      default:
        return "secondary";
    }
  };

  // Format the change value with sign
  const formatChange = () => {
    const sign = change > 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  return (
    <Card className="@container/card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardDescription className="text-sm font-medium">
          {title}
        </CardDescription>
        {Icon && (
          <Icon className="h-4 w-4 text-muted-foreground" />
        )}
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
          {value}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 pt-0">
        <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColorClass()}`}>
          {getTrendIcon()}
          <span>{formatChange()}</span>
          {changeText && <span className="text-muted-foreground font-normal">{changeText}</span>}
        </div>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </CardFooter>
    </Card>
  );
};

/**
 * StatscardGroup Component
 * A container for displaying multiple Statscards in a responsive grid
 */
const StatscardGroup = ({ children, className = "" }) => {
  return (
    <div className={`grid gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Example usage with sample data
 */
const StatscardExample = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      change: 12.5,
      changeText: "Trending up this month",
      description: "Visitors for the last 6 months",
      trend: "up",
    },
    {
      title: "New Customers",
      value: "1,234",
      change: -20,
      changeText: "Down 20% this period",
      description: "Acquisition needs attention",
      trend: "down",
    },
    {
      title: "Active Accounts",
      value: "45,678",
      change: 12.5,
      changeText: "Strong user retention",
      description: "Engagement exceeds targets",
      trend: "up",
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      change: 4.5,
      changeText: "Steady performance increase",
      description: "Meets growth projections",
      trend: "up",
    },
  ];

  return (
    <StatscardGroup>
      {stats.map((stat, index) => (
        <Statscard key={index} {...stat} />
      ))}
    </StatscardGroup>
  );
};

export { Statscard, StatscardGroup, StatscardExample };
export default Statscard;