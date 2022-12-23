import {
  ArrowDownward,
  ArrowUpward,
  DirectionsCar,
  Groups,
  Info,
  InsertEmoticonRounded,
  LocalMall,
  MoreVert,
  PriorityHighSharp,
  SentimentSatisfiedAlt,
  StarsSharp,
  TrendingUp,
  VerifiedUser,
} from "@mui/icons-material";
import cn from "classnames";
import starIcon from "../../assets/star.svg";
import stockIcon from "../../assets/stock.svg";
import Chart from "../../components/Chart";
import styles from "./Home.module.scss";
import { products, rows } from "../../utils/utls";
const Home = () => {
  return (
    <div>
      <div className="flex w-full my-4 text-[#707070] justify-between items-center">
        <div className={styles.filterText}>Filter By</div>
        <div>
          <div
            className={cn(
              styles.buttonTQM,
              "cursor-pointer bg-[#e11e25] hover:bg-blue-800 transition-all duration-500 font-semibold"
            )}
          >
            TQM
          </div>
        </div>
      </div>
      <div className="flex md:justify-between flex-col sm:gap-10 md:flex-row">
        <div className="flex flex-wrap gap-6 ">
          {products.map((product) => (
            <div className={styles.dataContainer}>
              <div className={styles.dataDetails}>
                <div className={styles.dataDetailsImg}>{product.image}</div>
                <div className={styles.dataDetailsPara}>{product.title}</div>
              </div>
              <div className={styles.dataDetailsPrice}>{product.price}</div>
            </div>
          ))}
        </div>

        <div className={cn(styles.chartWrapper, "w-[33%] md:w-[40%]")}>
          <div className="flex px-6 pt-4 text-black justify-between">
            <div className="text-[12px] uppercase">User Statistics</div>
            <div>
              <MoreVert />
            </div>
          </div>
          <Chart />
          <div className="flex px-6 pb-4 text-black justify-around">
            <div className="flex flex-col  justify-center text-center">
              <div className="text-[#707070]">Weekly Users</div>
              <div>8,210</div>
            </div>
            <div className="flex flex-col  justify-center text-center">
              <div className="text-[#707070]">Monthly Users</div>
              <div>241,894</div>
            </div>
            <div className="flex flex-col  justify-center text-center">
              <div className="text-[#707070]">Trend</div>
              <TrendingUp />
            </div>
          </div>
        </div>
      </div>

      <div className="text-black py-10 flex flex-wrap justify-between flex-col md:flex-row gap-5">
        <div className="bg-white w-[32%]">
          <div className={styles.topCustomer}>Top Customer</div>
          <div className="flex justify-between p-4">
            <div className="flex items-center ml-6">
              <img
                src="https://source.unsplash.com/random/?ceo"
                alt=""
                className="object-cover w-16 rounded-full h-16 mr-6"
              />
              <div className="flex flex-col gap-1">
                <div>Christina</div>
                <div>Ambrosia</div>
              </div>
            </div>

            <div>$ 49,137</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4">
            <div>Revenue / month</div>
            <div>Processed orders / month</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4 mb-4">
            <div className="flex gap-8">
              <span className="text-[19px] text-black">$ 13,469.80</span>{" "}
              <span className="text-green-600 flex gap-2">
                <ArrowUpward /> 12%
              </span>
            </div>
            <div className="flex gap-8">
              <span className="text-[19px] text-black">180</span>{" "}
              <span className="text-red-600 flex gap-2">
                <ArrowDownward /> 12%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white w-[32%]">
          <div className={styles.topCustomer}>Top Customer</div>
          <div className="flex justify-between p-4">
            <div className="flex items-center ml-6">
              <img
                src="https://source.unsplash.com/random/?sara"
                alt=""
                className="object-cover w-16 rounded-full h-16 mr-6"
              />
              <div className="flex flex-col gap-1">
                <div>Julia</div>
                <div>Jason</div>
              </div>
            </div>

            <div>$ 49,137</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4">
            <div>Revenue / month</div>
            <div>Processed orders / month</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4 mb-4">
            <div className="flex gap-8">
              <span className="text-[19px] text-black">$ 13,469.80</span>{" "}
              <span className="text-green-600 flex gap-2">
                <ArrowUpward /> 12%
              </span>
            </div>
            <div className="flex gap-8">
              <span className="text-[19px] text-black">180</span>{" "}
              <span className="text-red-600 flex gap-2">
                <ArrowDownward /> 12%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white w-[32%]">
          <div className={styles.topCustomer}>Top Customer</div>
          <div className="flex justify-between p-4">
            <div className="flex items-center ml-6">
              <img
                src="https://source.unsplash.com/random/?doctor"
                alt=""
                className="object-cover w-16 rounded-full h-16 mr-6"
              />
              <div className="flex flex-col gap-1">
                <div>Richart</div>
                <div>Ambrosia</div>
              </div>
            </div>

            <div>$ 49,137</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4">
            <div>Revenue / month</div>
            <div>Processed orders / month</div>
          </div>
          <div className="flex text-[#707070] justify-between mt-4 mx-4 mb-4">
            <div className="flex gap-8">
              <span className="text-[19px] text-black">$ 13,469.80</span>{" "}
              <span className="text-green-600 flex gap-2">
                <ArrowUpward /> 12%
              </span>
            </div>
            <div className="flex gap-8">
              <span className="text-[19px] text-black">180</span>{" "}
              <span className="text-red-600 flex gap-2">
                <ArrowDownward /> 12%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[1.5rem] capitalize font-bold py-2  text-[#4C4C4C]">
          Active Orders
        </div>

        {/* <List className="w-full h-6 "/> */}
        <div className="text-black w-full ">
          <div className="flex flex-col bg-white w-full justify-between text-center">
            <div
              className={cn(styles.tableHeader, "flex gap-10 justify-around ")}
            >
              <span className="text-red-600">
                Type <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Order # <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Customers <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Zip Code <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Order Time <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Vendor <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Rider <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Order Amount <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
              <span className="text-red-600">
                Performance <ArrowUpward className="text-[#BEBDBD]" />
                <ArrowDownward className="text-[#BEBDBD]" />
              </span>
            </div>
            {rows.map((item) => (
              <div className="flex py-4 px-2 justify-center items-center">
                <div
                  className={cn(
                    `text-center  rounded-full ${
                      item.type === "Squad" ? "bg-[#FFF27B]" : "bg-[#FFAFB1]"
                    }  flex justify-center items-center`
                  )}
                >
                  {" "}
                  <span
                    className={cn(
                      styles.squad,

                      `text-center  ${
                        item.type === "Squad"
                          ? "text-[#809900]"
                          : "text-[#E90008]"
                      } px-8 py-2   flex justify-center items-center`
                    )}
                  >
                    {" "}
                    {item.type}
                  </span>
                </div>
                <div className={cn(styles.text, "text-center w-[10rem]")}>
                  {" "}
                  {item.order}
                </div>
                <div className="flex gap-10 w-[13rem]">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-16 object-cover h-16 rounded-full"
                  />
                  <div>
                    <div>{item.name} </div>
                    <div className={cn(styles.smallText)}>Elu Claire</div>
                    <div className={cn(styles.smallText)}>+1 916-350</div>
                  </div>
                </div>
                <div className={cn(styles.text, "text-center w-[10rem]")}>
                  50480
                </div>
                <div className={cn(styles.textRight, "  w-[10rem]")}>
                  3: 12 PM
                </div>
                <div className="w-[16rem] flex items-end justify-end">
                  <img
                    src='https://source.unsplash.com/random/?book"'
                    alt=""
                    className="w-20 object-cover rounded-md  h-20 "
                  />
                </div>
                <div className="w-[10rem] text-right">{item.rider}</div>
                <div className={cn("text-right w-[10rem]")}>
                  {" "}
                  <span className={cn(styles.textOrder, " px-4 py-2 ")}>
                    {" "}
                    {item.orderAmount}
                  </span>
                </div>
                <div className="w-[18rem]  text-right ">
                  <span>
                    {item.status == "success" && (
                      <InsertEmoticonRounded className="text-green-600" />
                    )}
                    {item.status == "error" && (
                      <Info className="text-red-600" />
                    )}
                    {item.status == "pending" && (
                      <StarsSharp className="text-yellow-600" />
                    )}
                    {item.status == "double error" && (
                      <PriorityHighSharp className="text-yellow-600" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
