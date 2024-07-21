"use client"
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Link } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
 
const FormSchema = z.object({
  bio: z
    .string()
    .min(1, {
      message: "Bio must be at least 1 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})
 
export default function ProfileDashboard() {
  const router = useRouter();
  const handleEditClick = () => {
    router.push("/user/profile/projects")
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return (
    <div className="grid gap-8">
        <div>
        <Avatar>
            <AvatarImage src="https://unsplash.com/photos/a-group-of-people-walking-down-a-street-5CrEoOvW7Kk" alt="profile photo" />
            <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <p>Haley Noelle</p>
        </div>
        <div>
        <nav>
            <a href="/user/profile/projects/edit-projects">My Materials/Settings/etc.</a>
        </nav>
        </div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
                <FormItem>
                <FormLabel>About</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Bio; Websites; etc."
                    className="resize-none"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">Submit</Button>
        </form>
        </Form>
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
            </Card>
            <Card>
              <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                Status
              </CardDescription>
              </CardHeader>
              <CardContent>clay type, firing, glaze, measurements</CardContent>
              <CardFooter>
                <a onClick={handleEditClick}>full project page</a>
              </CardFooter>
            </Card>
        </div>
    </div>
  )
}