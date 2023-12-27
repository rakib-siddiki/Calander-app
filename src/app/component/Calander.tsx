"use client";
import React, { FC, useState } from "react";
import Cell from "./Cell";
import {
  addMonths,
  addYears,
  differenceInDays,
  endOfMonth,
  format,
  startOfMonth,
  subMonths,
  subYears,
} from "date-fns";

const Calander: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numberOfDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDate = 6 - endDate.getDay();

  const prevMonthsDates = endOfMonth(subMonths(startDate, 1));
  const nextMonthDates = startOfMonth(addMonths(endDate, 1));
  return (
    <div className="grid grid-cols-7  border-t border-l border-gray-400 min-w-[365px]">
      <Cell handleClick={() => setCurrentDate(subYears(startDate, 1))}>
        {"<<"}
      </Cell>
      <Cell handleClick={() => setCurrentDate(subMonths(startDate, 1))}>
        {"<"}
      </Cell>
      <Cell className="col-span-3">{format(startDate, "MMMM yyyy")}</Cell>
      <Cell handleClick={() => setCurrentDate(addMonths(startDate, 1))}>
        {">"}
      </Cell>
      <Cell handleClick={() => setCurrentDate(addYears(startDate, 1))}>
        {">>"}
      </Cell>

      {weekDays.map((day) => (
        <Cell className="font-bold text-gray-200" key={day}>
          {day}
        </Cell>
      ))}

      {Array.from({ length: prefixDays }).map((_, i) => {
        const date = prevMonthsDates.getDate() - prefixDays + i + 1;
        return (
          <Cell className="text-gray-400" key={i}>
            {date}
          </Cell>
        );
      })}

      {Array.from({ length: numberOfDays }).map((_, i) => {
        const date = i + 1;
        const isCurrentDate = date === new Date().getDate()
        return (
          <Cell
            isCurrentDate={isCurrentDate}
            className="font-semibold text-gray-300"
            key={i}
          >
            {date}
          </Cell>
        );
      })}

      {Array.from({ length: suffixDate }).map((_, i) => {
        const date = nextMonthDates.getDate() + i;
        return (
          <Cell className="text-gray-400" key={i}>
            {date}
          </Cell>
        );
      })}
    </div>
  );
};

export default Calander;
