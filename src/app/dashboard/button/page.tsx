"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";

export default function Page() {
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }, [loading])
    return (
        <div className="grid grid-cols-5 gap-2">

            {
                loading ? (
                    <Button variant="outline" capitalize={false} disabled>
                        <Loader2 className="animate-spin" />
                        Please wait
                    </Button>
                ) :
                    <Button variant="outline" capitalize={false} onClick={() => setLoading(true)} >push</Button>
            }

        </div>

    );
}