import React from "react";
import { Button, Flex, Text, Box, Image } from "@chakra-ui/react";
import Aos from "aos";

import OnlineBookingsImage from "../../assets/images/welcome-page/welcome-note.png";
import AppointmentImage from "../../assets/images/online-bookings-page/appointment.jpg";
import BgImage from "../../assets/images/welcome-page/testimonials-background.jpg";
import NavLinkItem from "../../components/link-item/header-links.component";
import { COLORS } from "../../styles/theme";
import MapImage from "../../assets/images/welcome-page/map.png";

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);

	return (
		<>
			<Flex
				w="100%"
				justify="space-between"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				pt={{ base: "8rem", md: "10rem", lg: "12rem" }}
				bgColor="white">
				<Flex flexDir="column" w={{ base: "100%", lg: "68%" }}>
					<Text
						color={COLORS.PRIMARY_COLOR}
						fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}>
						Online Appointment Bookings
					</Text>
					<Flex
						flexDir={{ base: "column", lg: "row-reverse" }}
						w="100%"
						minH="15rem"
						mt="2rem"
						justify="space-between">
						<Image
							src={AppointmentImage}
							w={{ base: "100%", lg: "45%" }}
							h={{ base: "100%", lg: "15rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
						<Flex
							flexDir="column"
							mt={{ base: "2rem", lg: "none" }}
							w={{ base: "100%", lg: "50%" }}
							justify="space-between">
							<Text>
								If you’d like to make a hairdressing appointment then please
								complete the{" "}
								<Box as="span" fontWeight="bold">
									Online Booking Form
								</Box>{" "}
								below.
							</Text>
							<Text>
								If it is your first time making an appointment online then you
								will be asked to{" "}
								<Box as="span" fontWeight="bold">
									‘Sign Up‘
								</Box>{" "}
								which only involves adding your name, email and phone number.
							</Text>
						</Flex>
					</Flex>
					<Text mt="2rem">
						When you first create an online account we will send a one-time
						passcode to your phone to confirm your details and then you’re all
						set up!
					</Text>
					<Text mt="2rem">
						You can then select the hair service you’d like by clicking on the{" "}
						<Box as="span" fontWeight="bold">
							‘Add Service‘
						</Box>{" "}
						button and then go on to select your preferred stylist and book an
						available time.
					</Text>
					<Text mt="2rem">
						If you have any problems whatsoever with the online booking form
						then please do{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
						<NavLinkItem color={COLORS.PRIMARY_COLOR} url="/book-appointment">
								get in touch.
							 </NavLinkItem>
						</Box>
					</Text>
					<Text mt="2rem">
						If you’re flexible and would like an appointment sooner than is
						currently available (if possible) then we also offer a{" "}
						<Box as="span" fontWeight="bold">
							WAIT LIST
						</Box>
						. If you add your details{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
						<NavLinkItem color={COLORS.PRIMARY_COLOR} url="/book-appointment">
								HERE
							</NavLinkItem>
						</Box>{" "}
						we will text or email you if we have a cancellation.
					</Text>
					<Text mt="2rem" pb="4rem">
						Many thanks for booking your next hair appointment with us here at{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Flapex Beauty Salon
						</Box>{" "}
						in Brighouse and we look forward to seeing you again soon.
					</Text>
				</Flex>
				<Flex d={{ base: "none", lg: "flex" }} w="25%" h="25rem">
					<Image
						src={OnlineBookingsImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
			</Flex>
			<Flex
				bgRepeat="no-repeat"
				position="fixed"
				bgPos="top"
				zIndex={-4}
				bgSize="cover"
				bgImage={`url(${BgImage})`}
				minH="50rem"
				w="100%"
			/>
			<Flex
				flexDir="column"
				w="100%"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				minH="25rem"
				justify="center"
				bgColor="transparent">
				<Flex
					data-aos="zoom-in"
					flexDir="column"
					h="15rem"
					justify="space-between"
					bgColor="rgba(125,5,63,0.8)"
					w="100%"
					py="5%"
					align="center">
					<Text
						textAlign="center"
						fontSize={{
							base: "1.2rem",
							sm: "1.5rem",
							md: "1.8rem",
							lg: "2rem",
						}}
						color="white">
						Book Your Next Hair Appointment Now!
					</Text>
					<Box my="1.5rem" color="white" mx="auto">
						<NavLinkItem url="/book-appointment">
							<Button
								h={{ base: "2.5rem", lg: "3.5rem" }}
								fontSize={{ base: "1rem", md: "1.1rem", lg: "1.3rem" }}
								border="1px solid white"
								fontWeight="normal"
								color="white"
								_hover={{
									bgColor: "none",
								}}
								w={{ base: "15rem", md: "18rem", lg: "20rem" }}
								bgColor="#5e5e5e">
								Appointment Enquiry
							</Button>
						</NavLinkItem>
					</Box>
				</Flex>
			</Flex>
			<Flex
				pt="3rem"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				h={{ base: "20rem", md: "30rem", lg: "45rem" }}
				bgColor="white">
				<Image src={MapImage} h="90%" w="100%" />
			</Flex>
		</>
	);
};

export default Content;
