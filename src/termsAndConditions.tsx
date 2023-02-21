import {
  Box,
  Heading,
  Text,
  VStack,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FC } from "react";

const TermsAndCondition: FC = () => {
  return (
    <>
      <Box as="main" px="7" bg="white" py="5">
        <Navbar
          linksContainer={{
            color: "black",
          }}
          toggler={{
            "aria-label": "menu toggler",
            color: "blackAlpha.700",
          }}
        />

        <Heading py="20" textAlign={"center"}>
          Terms And Conditions
        </Heading>

        <VStack alignItems="start" gap={4} mb="16">
          <Text>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern healthyLab's relationship with you in relation
            to this website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </Text>
          <Text>
            The term 'healthyLab' or 'us' or 'we' refers to the owner of the
            website whose registered office is healthyLab. The term 'you' refers
            to the user or viewer of our website.
          </Text>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, the following personal information
              may be stored by us for use by third parties: [List any
              information that may be collected by cookies, such as IP address,
              browsing history, etc.].
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              All trademarks reproduced in this website, which are not the
              property of, or licensed to the operator, are acknowledged on the
              website.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              From time to time, this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of [Your Country].
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              We do not provide medical advice or treatment. The information and
              materials on this website are for educational and informational
              purposes only and are not a substitute for medical advice,
              diagnosis, or treatment. Always seek the advice of your physician
              or other qualified healthcare provider with any questions you may
              have regarding a medical condition. Never disregard professional
              medical advice or delay in seeking it because of something you
              have read on this website.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              By purchasing any products or services from us, you acknowledge
              that you have read and agreed to these terms and conditions.
            </ListItem>
          </List>
          <Text>Thank you for using our website.</Text>
          <Text>HealthyLab</Text>
        </VStack>
      </Box>
      <Footer px="7" />
    </>
  );
};

export default TermsAndCondition;
