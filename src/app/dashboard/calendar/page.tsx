"use client";
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"



export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div >
            <div className="flex justify-center border-spacing-2 ">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                />
            </div>
        </div>
    )
}


