
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";




export default function Page() {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card content</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
            <CardImplement title="Create project" description="Deploy your new project in one-click." content="Card content" buttonCancel="Cancel" buttonAction="Deploy" />

        </div>
    );
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    content: string
    buttonCancel: string
    buttonAction: string
}

const CardImplement = ({ title, description, content, buttonCancel, buttonAction }: CardProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">{buttonCancel}</Button>
                <Button>{buttonAction}</Button>
            </CardFooter>
        </Card>
    )
}


