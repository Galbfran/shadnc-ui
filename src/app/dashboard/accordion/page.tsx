import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Page() {

    const items = [
        {
            id: 1,
            title: "Is it accessible?",
            content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            id: 2,
            title: "Is it styled?",
            content: "Yes. It comes with default styles that matches the other components' aesthetic.",
        },
        {
            id: 3,
            title: "Is it animated?",
            content: "Yes. It's animated by default, but you can disable it if you prefer.",
        }
    ];

    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                {
                    items.map((item) => (
                        <AccordionItem value={`item-${item.id}`} key={item.id}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    );
}