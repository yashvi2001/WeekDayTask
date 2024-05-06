import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const JobCard = ({ data }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleClick = (link) => {
    router.push(link);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card
        sx={{
          transition: "box-shadow 300ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
          height: "100%",
          position: "relative",
          borderRadius: "20px",
          padding: "5px",
          margin: "0 auto",
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              padding: "4px 6px",
              boxShadow: " rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
              borderRadius: "10px",
              border: "1px solid rgb(230, 230, 230)",
              color: "rgba(0, 0, 0, 0.87)",
              fontSize: "9px",
              fontWeight: 400,
              width: "max-content",
              marginBottom: "16px",
            }}
          >
            ⏳ Posted 19 days ago
          </Typography>
          <div>
            <div className="info-container">
              <div>
                <Image
                  width={50}
                  height={50}
                  src={data.logoUrl}
                  alt="logo"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    overflowClipMargin: "content-box",
                    overflow: "clip",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    marginBottom: "3px",
                    color: "#8b8b8b",
                  }}
                >
                  {data.companyName}
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    marginBottom: "3px",
                  }}
                >
                  {data.jobRole &&
                    data.jobRole.charAt(0).toUpperCase() +
                      data.jobRole.slice(1)}{" "}
                  Engineer
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="cards-sub-text"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    marginTop: "5px",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  {data.location &&
                    data.location.charAt(0).toUpperCase() +
                      data.location.slice(1)}
                </Typography>
              </div>
            </div>
          </div>
          <Typography
            variant="body2"
            className="card-salary"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              margin: "8px 0",
              color: "rgb(77, 89, 106)",
            }}
          >
            Estimated Salary: ₹{data?.minJdSalary ?? "10"} -{" "}
            {data?.maxJdSalary ?? "100"} LPA{" "}
            <span aria-label="Offered salary range">✅</span>
          </Typography>
          <div className="jd-link-container">
            <div className="hard-lang-container"></div>
          </div>
          <div>
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.5, fontWeight: 500 }}
            >
              About Company:
            </Typography>
            <div>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                <strong>About us</strong>
              </Typography>
              <Typography
                className="company-data"
                style={{
                  overflow: expanded ? "visible" : "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: expanded ? "unset" : "10",
                  fontSize: "14px",
                }}
              >
                {data.jobDetailsFromCompany}
              </Typography>
            </div>
          </div>
          <div className="view-job-cont">
            <Typography
              className="v-j-text"
              sx={{ fontSize: "14px", color: "#202fed", cursor: "pointer" }}
              onClick={toggleExpand}
            >
              {expanded ? "Hide Details" : "View job"}
            </Typography>
          </div>
          <div className="poc-info-container">
            <Typography
              variant="h6"
              style={{
                marginTop: "10px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                marginBottom: "3px",
                color: "#8b8b8b",
              }}
            >
              Minimum Experience
            </Typography>
            <Typography
              style={{ display: "block", fontSize: "14px", lineHeight: 1.5 }}
              variant="h5"
            >
              {data.minExp != 1 && data.minExp != null
                ? data.minExp + " years"
                : (data.minExp == 1 ? 1 : 0) + " year"}
            </Typography>
          </div>
          <div className="status-container">
            <Button
              variant="contained"
              className="btn-status"
              onClick={() => handleClick(data.jdLink)}
            >
              ⚡ Easy Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
