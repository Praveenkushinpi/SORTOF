import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Img,
  Tailwind,
} from '@react-email/components';

interface WaitlistEmailProps {
  username: string;
  isAlreadyInWaitlist: boolean;
}

export default function WaitlistEmail({
  username,
  isAlreadyInWaitlist
}: WaitlistEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black text-white font-sans">
          <Container className="mx-auto py-16 px-10 max-w-lg text-center">
            <Img 
              src="https://via.placeholder.com/120x40/FFFFFF/000000?text=SORTEDOF"
              alt="Sortedof Logo"
              className="mx-auto mb-8 max-w-32 block"
            />
            
            <Heading className="text-white text-3xl font-semibold leading-tight mb-4 tracking-tight">
              You're on the Waitlist
            </Heading>
            
            <Text className="text-white text-base leading-relaxed mb-10">
              Be the first to try <span className="font-semibold">Sortedof</span> — your one-hand solution
              for everyday notes.
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-5 text-left">
              Hi {username},
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-4 text-left">
              Thanks for joining our waitlist. You'll be among the first to get access when we launch our beta.
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-10 text-left">
              We'll notify you as soon as spots become available.
            </Text>
            
            <Text className="text-white text-sm leading-relaxed m-0 text-left">
              Thanks for your interest,<br />
              The Sortedof Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}