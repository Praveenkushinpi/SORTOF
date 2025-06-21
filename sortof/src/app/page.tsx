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
  name?: string;
  productName?: string;
  logoUrl?: string;
}

export default function WaitlistEmail({
  name = 'there',
  productName = 'SORTEDOF',
  logoUrl = 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/e1c7478f0ecfbdc623bcb96dc8cf622ce25ea15b_screenshot_2025-06-18_114913.png'
}: WaitlistEmailProps) {
  return (
    <Html>
      <Head />
      
        <Body className="bg-black text-white font-sans">
          <Container className="mx-auto py-16 px-10 max-w-lg text-center">
            <Img 
              src={logoUrl}
              alt={`${productName} Logo`}
              className="mx-auto mb-8 max-w-32"
            />
            
            <Heading className="text-white text-3xl font-semibold leading-tight mb-4 tracking-tight">
              You're on the Waitlist
            </Heading>
            
            <Text className="text-white text-base leading-relaxed mb-10">
              Be the first to try <span className="font-semibold">{productName}</span> — your one-hand solution
              for everyday notes.
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-5 text-left">
              Hi {name},
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-4 text-left">
              Thanks for joining our waitlist. You'll be among the first to get access when we launch our beta.
            </Text>
            
            <Text className="text-white text-base leading-relaxed mb-10 text-left">
              We'll notify you as soon as spots become available.
            </Text>
            
            <Text className="text-white text-sm leading-relaxed m-0 text-left">
              Thanks for your interest,<br />
              The {productName} Team
            </Text>
          </Container>
        </Body>
      
    </Html>
  );
}