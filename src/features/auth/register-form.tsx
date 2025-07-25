"use client";

import { Button } from "@/src/shared/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { type RegisterFormValues, RegisterSchema } from "./schema";

interface RegisterFormProps
	extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {}

export const RegisterForm = ({ className }: RegisterFormProps) => {
	const form = useForm<RegisterFormValues>({
		defaultValues: {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		resolver: zodResolver(RegisterSchema),
	});

	const handleSubmit = form.handleSubmit((data) => {});

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit} className={`space-y-4 ${className || ""}`}>
				<FormField
					control={form.control}
					name="displayName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									id="displayName"
									type="text"
									placeholder="John Doe"
									className="clay-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="clay-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									id="password"
									type="password"
									placeholder="Create a strong password"
									className="clay-input"
									{...field}
								/>
							</FormControl>
							<p className="text-xs text-clay-muted">
								Password must be at least 6 characters long.
							</p>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									id="confirmPassword"
									type="password"
									placeholder="Confirm your password"
									className="clay-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Create Account
				</Button>
				<Button type="button" className="w-full">
					<FaGoogle /> Sign in with Google
				</Button>
			</form>
		</Form>
	);
};
