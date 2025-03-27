import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Code,
  FileText,
  ActivityIcon as Function,
  Github,
  Instagram,
  Linkedin,
  Menu,
  PenTool,
  Twitter,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignupForm } from "@/components/signup-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PenTool className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Pallento</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#signup">Join Waitlist</Link>
            </Button>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="#features" className="text-sm font-medium hover:text-primary">
                    Features
                  </Link>
                  <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                    Testimonials
                  </Link>
                  <Link href="#pricing" className="text-sm font-medium hover:text-primary">
                    Pricing
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:text-primary">
                    Contact
                  </Link>
                  <Button asChild className="mt-4">
                    <Link href="#signup">Join Waitlist</Link>
                  </Button>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Write Better Notes with Math Equations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Pallento is a rich text editor with built-in block functionality like the /math block that lets you
                    seamlessly type math equations into your notes. Made for students, by students.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="#signup">Join the Waitlist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/Untitled design.png?height=600&width=800"
                    alt="Pallento editor interface showing math equations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Features for Students
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Everything you need to take better notes and excel in your studies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <Function className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Math Equations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Type /math to insert beautiful LaTeX equations directly into your notes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <Code className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Code Blocks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Add syntax-highlighted code snippets for programming courses.</p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <BookOpen className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Study Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Focus mode eliminates distractions for better concentration.</p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <FileText className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Export Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Export your notes as PDF, Markdown, or HTML for easy sharing.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src="/big-pallento2.png?height=597&width=886"
                  alt="Pallento editor interface with math equations and code blocks"
                  width={886}
                  height={597}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <Button asChild size="lg" className="px-8">
                    <Link href="#signup">Try Pallento</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Students Are Saying</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from students who've tried our beta version.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Jamie Davis</CardTitle>
                      <CardDescription>Engineering Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The math equation feature is a game-changer for my engineering notes. I can finally keep all my
                    work in one place."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Sarah Lee</CardTitle>
                      <CardDescription>Physics Major</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I love how I can switch between writing text and adding complex equations without breaking my
                    flow."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Michael Johnson</CardTitle>
                      <CardDescription>Computer Science Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The code blocks with syntax highlighting are perfect for my programming courses. Pallento is
                    exactly what I needed."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Made by students, for students. We believe in accessible education.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 md:max-w-4xl">
              <Card className="bg-background relative overflow-hidden border-primary">
                <div className="absolute top-0 right-0 left-0 h-2 bg-primary"></div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Always Free</CardTitle>
                  <CardDescription>For all students, forever.</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Math equation blocks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Code blocks with syntax highlighting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Export to PDF, Markdown, and HTML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Cloud sync across devices</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link href="#signup">Join the Waitlist</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-background relative overflow-hidden border-primary">
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary to-violet-600"></div>
                <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-violet-600 px-3 py-1 text-xs font-medium text-white">Popular</div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pallento Pro</CardTitle>
                  <CardDescription>For power users and professionals.</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$8<span className="text-lg font-normal">/month</span></div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Everything in the free plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>AI-powered note suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Smart equation recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>AI-assisted problem solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority support</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" size="lg" variant="default" style={{ background: "linear-gradient(to right, var(--primary), #8b5cf6)" }}>
                    <Link href="#signup">Get Early Access</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Be the First to Know When We Launch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join our waitlist to get early access to Pallento when we launch.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                {/* Import the SignupForm component */}
                <SignupForm />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">See Pallento in Action</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Watch how easy it is to create beautiful notes with math equations and code blocks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="#signup">Join the Waitlist</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl border shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/AZm37-914mE"
                    title="Pallento Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <PenTool className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">Pallento</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Pallento. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/1KAOEXNAt-jDSNCkDORcpjtcPGNRZ5FvNTTwLjsJGlCk/edit?usp=sharing"
              className="text-muted-foreground hover:text-foreground"
            >
              Presentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
