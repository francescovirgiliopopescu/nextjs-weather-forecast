import { getIcon } from "@/util/IconCode";
import { IconType } from "react-icons";
import { FaSun } from "react-icons/fa";
import { formatTimestampToDay } from "@/util/Date";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
type dayCardProps = {
  // icon: React.ReactNode;
  iconCode: number | undefined;
  timestamp: number | undefined;
  degree: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function DayCard({
  // icon = <FaSun className="w-16 h-16" />,
  iconCode = 999,
  timestamp = 999,
  degree = 32,
  ...props
}: dayCardProps) {
  const symbol = getIcon(iconCode);
  const dayDate = formatTimestampToDay(timestamp);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 bg-background-box px-4 py-6 rounded-3xl ${props.className}`}
    >
      <span className="text-base">{dayDate}</span>
      <Image
        alt="weather symbols"
        src={symbol.src}
        width={72}
        height={72}
        className="w-16 h-16"
      />
      <div>{degree}&deg;</div>
    </div>
  );
}
