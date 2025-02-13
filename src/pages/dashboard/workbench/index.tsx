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
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

function Workbench() {
	return (
		<div className="p-2">
			<Paper elevation={3}>
				hello, this is effect of Material UI こんにちは、これはMaterial UIの効果です
				<Divider component="li" />
				This project is using ANTD as main UI lib. Please find here: https://ant.design/components/overview-cn/
				このプロジェクトでは、メインの UI ライブラリとして ANTD を使用しています。こちらをご覧ください:
				https://ant.design/components/overview-cn/
			</Paper>
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
