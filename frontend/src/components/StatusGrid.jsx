import MetricCard from "./MetricCard";
import {
  Globe,
  Clock3,
  FileText,
  Image,
  Link,
  BookOpen,
  Heading,
  AlertTriangle,
} from "lucide-react";

function StatusGrid({ result }) {
  return (
    <div className="cards">

      <MetricCard
    icon={<Globe size={22} />}
    title="Status"
    value={result.status}
/>

<MetricCard
    icon={<Clock3 size={22} />}
    title="Response Time"
    value={result.responseTime}
/>

<MetricCard
    icon={<FileText size={22} />}
    title="Page Title"
    value={result.title}
/>

<MetricCard
    icon={<Heading size={22} />}
    title="H1 Tags"
    value={result.h1Count}
/>

<MetricCard
    icon={<Image size={22} />}
    title="Total Images"
    value={result.totalImages}
/>

<MetricCard
    icon={<AlertTriangle size={22} />}
    title="Images Without Alt"
    value={result.imagesWithoutAlt}
/>

<MetricCard
    icon={<Link size={22} />}
    title="Total Links"
    value={result.totalLinks}
/>

<MetricCard
    icon={<BookOpen size={22} />}
    title="Word Count"
    value={result.wordCount}
/>

    </div>
  );
}

export default StatusGrid;