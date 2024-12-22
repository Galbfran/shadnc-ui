"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";




export default function Page() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {

    }, [checked])
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={checked} onCheckedChange={() => setChecked(!checked)} />
            <div className="w-4"></div>
            <label
                htmlFor="terms"
                className="m-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
            <Badge > Campo Selecionado {checked ? "Si" : "No"}</Badge>
        </div>
    );
}




