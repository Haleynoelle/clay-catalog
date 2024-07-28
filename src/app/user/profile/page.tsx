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
    <div className="grid grid-cols-2 gap-4 h-screen overflow-hidden">
        <div className='h-full'>
        <Avatar>
            <AvatarImage src="" alt="profile photo" />
            <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <p>Haley Noelle</p>        
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
        <a href="/user/profile/projects/edit-projects">Materials/Settings/etc.</a>

        </div>

        <div className="grid grid-cols-2 gap-4 overflow-y-auto h-full">
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