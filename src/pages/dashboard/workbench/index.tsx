/*import { Col, Row, Space } from "antd";

import AreaDownload from "./area-download";
import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";
import CurrentDownload from "./current-download";
import NewInvoice from "./new-invoice";
import TopAuthor from "./top-authors";
import TopInstalled from "./top-installed";
import TopRelated from "./top-related";
import TotalCard from "./total-card";*/
import {Paper, Divider,FormControl,InputLabel,Input,FormHelperText,Button,Select,MenuItem,TableContainer,
	Table,TableHead,TableRow,TableCell,TableBody
} from "@mui/material";
import {useState} from 'react'

interface User{
	name: string,
	age: number,
	sex: string
}

const selectChange = (e: { target: { value: any; }; }) =>{
	console.log(e.target.value)
}


const clickRow = (record: User) =>{
	console.log('h world: ' + JSON.stringify(record))
}
let i = 100
function Workbench() {
	const [rows, setRows] = useState<User[]>([
		{name: 'row1', age: 18, sex: 'male'},
		{name: 'row2', age: 19, sex: 'male'},
		{name: 'row3', age: 18, sex: 'female'},
		{name: 'row4', age: 21, sex: 'female'}
	])

	const handleClick = () => {
		setRows([...rows, {name: 'row' + i++, age: 18, sex: 'male'}])
	}

	return (
		<div className="p-2">
			<Paper elevation={3}>
				hello, this is effect of Material UI こんにちは、これはMaterial UIの効果です
				<Divider component="li" />
				This project is using ANTD as main UI lib. Please find here: https://ant.design/components/overview-cn/
				このプロジェクトでは、メインの UI ライブラリとして ANTD を使用しています。こちらをご覧ください:
				https://ant.design/components/overview-cn/
			</Paper>
			<div className="mt-2">
			<FormControl>
				<InputLabel htmlFor="yourname">username</InputLabel>
				<Input id="yourname" aria-describedby="username-help" />
				<FormHelperText id="username-help">please input your name</FormHelperText>
			</FormControl>
				<FormControl style={{ width: "80px", marginLeft: "20px" }} >
					<InputLabel htmlFor="select-age-id">Age</InputLabel>
					<Select
						labelId="select-age-id"
						id="demo-simple-select"
						value=""
						onChange={selectChange}
						>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={30}>30</MenuItem>
					</Select>
				</FormControl>

				<div>
				<Button variant="contained" color="primary" onClick={handleClick}>
					please click
				</Button>
				</div>

			</div>
			<Divider component="li" />
			<TableContainer component={Paper} style={{marginTop: "40px"}}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">username</TableCell>
							<TableCell align="center">age</TableCell>
							<TableCell align="center">sex</TableCell>
							<TableCell align="center">operation</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row" align="center">
									{row.name}
								</TableCell>
								<TableCell align="center">{row.age}</TableCell>
								<TableCell align="center">{row.sex}</TableCell>
								<TableCell align="center" scope="row" component="th">
									<Button variant="contained" color="primary" onClick={()=>clickRow(row)}>
										click Me
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

			</TableContainer>

		</div>
	);
	/*return (
		<div className="p-2">
			<Row gutter={[16, 16]} justify="center">
				<Col span={24} lg={16}>
					<BannerCard />
				</Col>
				<Col span={24} lg={8}>
					<Space direction="vertical" size="large" className="h-full w-full justify-center">
						<Conversion />
						<Applications />
					</Space>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={8}>
					<TotalCard
						title="Total Active Users"
						increase
						count="18,765"
						percent="2.6%"
						chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
					/>
				</Col>

				<Col span={24} md={8}>
					<TotalCard
						title="Total Installed"
						increase
						count="4,876"
						percent="0.2%"
						chartData={[45, 52, 38, 24, 33, 26, 21, 20, 6]}
					/>
				</Col>

				<Col span={24} md={8}>
					<TotalCard
						title="Total Downloads"
						increase={false}
						count="678"
						percent="0.1%"
						chartData={[35, 41, 62, 42, 13, 18, 29, 37, 36]}
					/>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={12} lg={8}>
					<CurrentDownload />
				</Col>
				<Col span={24} md={12} lg={16}>
					<AreaDownload />
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={12} lg={16}>
					<NewInvoice />
				</Col>
				<Col span={24} md={12} lg={8}>
					<TopRelated />
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={12}>
					<TopInstalled />
				</Col>

				<Col span={24} md={12}>
					<TopAuthor />
				</Col>
			</Row>
		</div>
	);*/
}

export default Workbench;
