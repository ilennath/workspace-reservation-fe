import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import TableBench from "../../components/table/TableBench";
import SearchBench from "../../components/searchbench/SearchBench";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      
      <SearchBench />
      <div className="homeWidgets">
        {/* <WidgetSm/>
        <WidgetLg/> */}
        <TableBench/>
      </div>
    </div>
  );
}
