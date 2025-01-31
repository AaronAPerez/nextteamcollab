<<<<<<< HEAD
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";


interface Props {
  
  href: string
  children: string
  
}

const Link = ({children,href}:Props) => {
  return (
    
      <NextLink href={href}  passHref legacyBehavior>
        <RadixLink>
      {children}
          </RadixLink>
      </NextLink>
    
  );
};

export default Link;
=======
import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes';


interface Props {
    href: string;
    children: string;
}



const Link = ({ href, children }: Props) => {
  return (
    <>
    <NextLink href={href} passHref legacyBehavior>
        <RadixLink>
            {children}
        </RadixLink>
    </NextLink>
    </>
  )
}

export default Link
>>>>>>> 835c5007b58c3975191dabeff4ef4c7d26a04933
