import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Link,
	Svg,
	Defs,
	LinearGradient,
	Stop,
	Rect,
} from "@react-pdf/renderer";
import { prisma } from "@/database/prisma";

type ToolsAndTechData = { skill: string; special: boolean; id: string }[];
type EducationTableData = [string, string, number, number, boolean?][];

export async function generatePdfFrom(urlOrigin: string) {
	// tools and tech data type assign
	let toolsAndTechData: ToolsAndTechData;
	// get tools and technology data from server
	const toolsAndTechRes = await fetch(`${urlOrigin}/api/tools-technologies`);

	if (toolsAndTechRes.status >= 200 && toolsAndTechRes.status < 300) {
		toolsAndTechData = await toolsAndTechRes.json();
	}

	// education table type assign and initialization
	let educationTableData: EducationTableData = [
		[
			"Degree/Diploma",
			"Institute/University",
			"Year of passing",
			"Percentage (%) / CGPA",
			false,
		],
	] as unknown as EducationTableData;

	// get education table data from the server
	const educationTableDataRes = await fetch(`${urlOrigin}/api/education`);

	if (
		educationTableDataRes.status >= 200 &&
		educationTableDataRes.status < 300
	) {
		// define res type
		type TEducationTableDataRes = Awaited<
			ReturnType<typeof prisma.education.findMany>
		>;

		// assign the resposne
		const data: TEducationTableDataRes = await educationTableDataRes.json();

		// format the response data to desire type
		const newData: EducationTableData = data.map((eachItem) => [
			eachItem.course,
			eachItem.institute,
			eachItem.yearOfPassing,
			eachItem.percentage || eachItem.GPA || 0,
			Boolean(eachItem.special),
		]);

		// merge both data for using later
		educationTableData = [...educationTableData, ...newData];
	}

	// languages array
	const languages = ["English", "Hindi", "Bengali (native)"];

	// hobbies array
	const hobbies = ["Playing games", "Listening music", "Watching movies"];

	// Create styles
	const styles = StyleSheet.create({
		page: {
			flexDirection: "column",
			fontFamily: "Times-Roman",
		},
		sectionHeading: {
			fontSize: 16,
			paddingLeft: 15,
			position: "absolute",
			left: 0,
			transform: "translateY(4)",
			fontWeight: "bold",
		},
		th: {
			backgroundColor: "#595959",
			color: "white",
			display: "flex",
			textAlign: "center",
			alignItems: "center",
		},
		colCommon: {
			paddingLeft: 5,
			paddingRight: 5,
			border: "0.5 solid #999",
			flexGrow: 1,
			backgroundColor: "white",
		},
		col1: {
			width: 164,
		},
		col2: {
			width: 164,
		},
		col3: {
			width: 72,
			textAlign: "center",
		},
		col4: {
			width: 80,
			textAlign: "center",
		},
		toolsAndTech: {
			width: 170,
			// border: "1px solid red",
			flexDirection: "row",
			marginTop: "-10",
		},
	});

	// Create Document Component
	const MyPDFDocument = () => {
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<View
						style={{
							flexGrow: 1,
							border: "1px solid black",
							marginTop: 25,
							marginRight: 25,
							marginBottom: 25,
							marginLeft: 40,
						}}
					>
						{/* header start */}
						<Header />
						{/* header end */}

						{/* career objective start */}
						<View style={{ marginBottom: 0 }}>
							<Heading>Career objective</Heading>
							<Details>
								Secure a responsible career opportunity to fully
								utilize my skills, while making a significant
								contribution to the success of the company.
							</Details>
						</View>
						{/* career objective end */}

						{/* profile summary start */}
						<View style={{ marginTop: -6 }}>
							<Heading>Profile summary</Heading>
							<ProfileSummaryItemList />
						</View>
						{/* profile summary end */}

						{/* education profile start */}
						<View style={{ marginTop: -6 }}>
							<Heading>Education profile</Heading>
							<EducationTable />
						</View>
						{/* education profile end */}

						{/* tools-technologies start */}
						<View style={{ marginTop: 4 }}>
							<Heading>Tools / Technologies</Heading>
							<ToolsTechnologies />
							<Text
								style={{
									fontSize: 8,
									paddingLeft: 10,
									marginTop: -10,
								}}
							>
								<Star /> just started learning about these
								fields or have very basic knowledge, not very
								much fluent in those fields
							</Text>
						</View>
						{/* tools-technologies end */}

						{/* language start */}
						<View style={{ marginTop: 4 }}>
							<Heading>Languages known</Heading>
							<View
								style={{
									flexDirection: "row",
									paddingLeft: 10,
									marginTop: 4,
									fontSize: 12,
								}}
							>
								{languages.map((lang, index) => {
									return (
										<Text key={lang}>
											{languages.length === index + 1
												? lang
												: `${lang}, `}
										</Text>
									);
								})}
							</View>
						</View>
						{/* language end */}

						{/* hobbies start */}
						<View style={{ marginTop: 4 }}>
							<Heading>Hobbies</Heading>
							<View
								style={{
									flexDirection: "row",
									paddingLeft: 10,
									fontSize: 12,
									marginTop: 4,
								}}
							>
								{hobbies.map((hobbie, index) => {
									return (
										<Text key={hobbie}>
											{hobbies.length === index + 1
												? hobbie
												: `${hobbie}, `}
										</Text>
									);
								})}
							</View>
						</View>
						{/* hobbies end */}

						{/* perosnal details start */}
						<View style={{ marginTop: 4 }}>
							<Heading>Personal details</Heading>
							<PersonalDetails />
						</View>
						{/* perosnal details end */}

						{/* time-stamp */}
						<View
							style={{
								position: "absolute",
								top: "100%",
								left: "100%",
								fontSize: 7,
								transform: "translateX(-168%)",
								// border: "1px solid red",
							}}
						>
							<Text>
								Created on{" "}
								{new Intl.DateTimeFormat("en-IN", {
									dateStyle: "full",
									timeStyle: "long",
								}).format(Date.now())}
							</Text>
						</View>
						{/* time-stamp */}
					</View>
				</Page>
			</Document>
		);
	};

	// heading compopnent for pdf
	function Heading({ children }: { children: string }) {
		return (
			<View style={{ position: "relative" }}>
				<Svg viewBox="0 0 150 8">
					<Defs>
						<LinearGradient
							id="myLinearGradient"
							x1={0}
							x2={0}
							y1={0}
							y2={0}
						>
							<Stop offset="5%" stopColor="#a6a6a6" />
							<Stop offset="5%" stopColor="#ffffff" />
						</LinearGradient>
					</Defs>
					<Rect
						width="140"
						height="8"
						fill="url('#myLinearGradient')"
					/>
				</Svg>
				<Text style={styles.sectionHeading}>{children}</Text>
			</View>
		);
	}

	// details compopnent for pdf
	function Details({ children }: { children: string }) {
		return (
			<Text style={{ fontSize: 12, padding: "10", paddingTop: 3 }}>
				{children}
			</Text>
		);
	}

	// profile summery list compopnent for pdf
	function ProfileSummaryItemList() {
		return (
			<View style={{ fontSize: 12, padding: "10" }}>
				{/* 1st item start */}
				<View
					style={{
						flexDirection: "row",
						marginTop: -6,
						// border: "1px solid red",
					}}
				>
					<View>
						<BulletPoint />
					</View>
					<View>
						<Text>
							Pursuing <BoldText>B. Tech</BoldText> in{" "}
							<BoldText>
								Computer Science and Engineering
							</BoldText>{" "}
							from{" "}
							<BoldText>Dream Institute of Technology</BoldText>
						</Text>
					</View>
				</View>
				{/* 1st item end */}
				{/* 2nd item start */}
				<View
					style={{
						flexDirection: "row",
						marginTop: -6,
						// border: "1px solid red",
					}}
				>
					<View>
						<BulletPoint />
					</View>
					<View>
						<Text>
							Completed <BoldText>Diploma</BoldText> in{" "}
							<BoldText>
								Electronics and Telecommunication Engineering
							</BoldText>{" "}
							from <BoldText>Jnan Chandra</BoldText>{" "}
							<BoldText> Ghosh Polytechnic</BoldText>
						</Text>
					</View>
				</View>
				{/* 2nd item end */}
				{/* 3rd item start */}
				<View
					style={{
						flexDirection: "row",
						// marginTop: -6,
						// border: "1px solid red",
					}}
				>
					<BulletPoint />
					<Text>
						Have capabilities to work as a team as well as lead the
						team
					</Text>
				</View>
				{/* 3rd item end */}
				{/* 4th item start */}
				<View
					style={{
						flexDirection: "row",
						marginTop: -6,
						// border: "1px solid red",
					}}
				>
					<BulletPoint />
					<Text>
						Enthusiastic and eager to learn new skill and technology
					</Text>
				</View>
				{/* 4th item end */}
			</View>
		);
	}

	// header compopnent for pdf
	function Header() {
		return (
			<View
				style={{
					// border: "1px solid red",
					paddingTop: 18,
					paddingLeft: 40,
					paddingRight: 40,
					paddingBottom: 10,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					{/* name, email, ph-no start */}
					<View
						style={{
							flexGrow: 1,
							// border: "1px solid red"
						}}
					>
						<Text style={{ fontSize: 39, marginTop: -2 }}>
							Nirvik Purkait
						</Text>
						<Link
							src="mailto:nirvikpurkait@gmail.com"
							style={{ fontSize: 12 }}
						>
							nirvikpurkait@gmail.com
						</Link>
						<Text style={{ fontSize: 13 }}>+91-8145149700</Text>
					</View>
					{/* name, email, ph-no end */}
					{/* address start*/}
					<View
						style={{
							textAlign: "right",
							fontSize: 12,
							width: 150,
							lineHeight: 1.3,
							// border: "1px solid red",
						}}
					>
						<Text style={{ textDecoration: "underline" }}>
							Current Address:-
						</Text>
						<Text>Mankhand, Mathur,</Text>
						<Text>Ramnagar, South 24 Parganas,</Text>
						<Text>743368, West Bengal</Text>
					</View>
					{/* address end*/}
				</View>
				{/* header underline border start*/}
				<View style={{ marginTop: 0 }}>
					<View
						style={{ backgroundColor: "black", height: 4 }}
					></View>
					<View
						style={{
							backgroundColor: "black",
							height: 1.5,
							marginTop: 2,
						}}
					></View>
				</View>
				{/* header underline border end */}
			</View>
		);
	}

	// compopnent for bold tex in pdf
	function BoldText({ children }: { children: string }) {
		return <Text style={{ fontWeight: "bold" }}>{children}</Text>;
	}

	// compopnent for bullet point in pdf
	function BulletPoint() {
		return (
			<Text
				style={{
					paddingRight: 10,
					fontSize: 24,
					marginTop: -6,
				}}
			>
				&#8226;
			</Text>
		);
	}

	// compopnent for bullet point for skills in pdf
	function ToolsTechBulletPoint() {
		return (
			<Text
				style={{
					paddingRight: 2,
					fontSize: 24,
					marginTop: -6,
				}}
			>
				&#8226;
			</Text>
		);
	}

	// education table compopnent for pdf
	function EducationTable() {
		return (
			<View
				style={{
					fontSize: 12,
					backgroundColor: "#999",
					marginTop: "1",
				}}
			>
				{educationTableData.map((eachRow, rowIndex) => {
					const rowStyle = rowIndex === 0 ? styles.th : {};
					return (
						<View style={{ flexDirection: "row" }} key={rowIndex}>
							{eachRow.map((eachColl, colIndex) => {
								let colStyle = {};
								if (colIndex === 0)
									colStyle = {
										...styles.col1,
										...styles.colCommon,
										...rowStyle,
									};
								if (colIndex === 1)
									colStyle = {
										...styles.col2,
										...styles.colCommon,
										...rowStyle,
									};
								if (colIndex === 2)
									colStyle = {
										...styles.col3,
										...styles.colCommon,
										...rowStyle,
									};
								if (colIndex === 3)
									colStyle = {
										...styles.col4,
										...styles.colCommon,
										...rowStyle,
									};
								return (
									<View style={colStyle} key={colIndex}>
										{colIndex !== 2 && colIndex !== 3 && (
											<Text style={{ width: "100%" }}>
												{eachColl}
											</Text>
										)}
										{colIndex === 2 && (
											<Text style={{ width: "100%" }}>
												{eachColl}
												{eachRow[4] && <Star />}
											</Text>
										)}
										{colIndex === 3 && (
											<Text style={{ width: "100%" }}>
												{eachRow[3]}
											</Text>
										)}
									</View>
								);
							})}
						</View>
					);
				})}
			</View>
		);
	}

	// tools and technology compopnent for pdf
	function ToolsTechnologies() {
		return (
			<View
				style={{
					fontSize: 12,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					marginLeft: 1,
					marginRight: 0,
					marginTop: 14,
					gap: 2,
					// border: "1 solid blue",
				}}
			>
				{toolsAndTechData.map((eachItem) => {
					return (
						<View style={styles.toolsAndTech} key={eachItem.id}>
							<View>
								<ToolsTechBulletPoint />
							</View>
							<View
								style={{
									// border: "1px solid blue",
									flexGrow: 1,
									width: "10",
								}}
							>
								<Text
									style={{
										width: "100%",
										marginBottom: "10",
										// border: "1px solid red"
									}}
								>
									{eachItem.skill}
									{eachItem.special && <Star />}
								</Text>
							</View>
						</View>
					);
				})}
			</View>
		);
	}

	// personal details compopnent for pdf
	function PersonalDetails() {
		return (
			<View
				style={{
					fontSize: 12,
					paddingLeft: 10,
					paddingRight: 10,
					flexDirection: "row",
					marginTop: 4,
					flexGrow: 1,
				}}
			>
				<View
					style={{
						// border: "1 solid red",
						flexGrow: 1,
						width: "50%",
					}}
				>
					<Text style={{ textDecoration: "underline" }}>
						Permanent address:-
					</Text>
					<View
						style={{
							width: "60%",
							// border: "1 solid blue",
							flexGrow: 1,
						}}
					>
						<Text>Vill - Mankhand, P.O - Mathur,</Text>
						<Text>P.S - Ramnagar, </Text>
						<Text> South 24 Parganas, 743368 </Text>
						<Text>West Bengal</Text>
					</View>
				</View>
				<View
					style={{
						// border: "1 solid red",
						flexGrow: 1,
						width: "50%",
					}}
				>
					<Text>Date of birth - 24/08/1998</Text>
					<Text> Sex - Male</Text>
					<Text> Nationality - Indian</Text>
					<Text> Marital Status - Unmarried</Text>
				</View>
			</View>
		);
	}

	// compopnent for a red star pdf
	function Star() {
		return (
			<Text
				style={{
					color: "red",
					fontSize: 10,
					position: "relative",
				}}
			>
				<Text
					style={{
						position: "absolute",
						display: "flex",
						marginTop: "-5",
						top: -5,
					}}
				>
					*
				</Text>
			</Text>
		);
	}

	return MyPDFDocument;
}
