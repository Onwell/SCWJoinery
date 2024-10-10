import { templateAskQuestion } from "../../../_components/Email/templateAskQuestion";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
    const body = await req.json();
    try {
    	const data = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["insertYourEmail"],
			subject: "Letter from Pumbio",
			react: templateAskQuestion({
				name: body.name || "empty",
				email: body.email || "empty",
				question: body.question || "empty",
			}),
    	});
    	return Response.json(data);
    } catch (error) {
    	return Response.json({ error });
    }
}