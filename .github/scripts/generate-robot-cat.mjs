import fs from "fs";

const token = process.env.GH_TOKEN;
const username = process.env.GITHUB_USERNAME || "Ravneet-project";

if (!token) {
  console.error("GH_TOKEN is missing.");
  process.exit(1);
}

const now = new Date();

const from = new Date(
  now.getTime() - 365 * 24 * 60 * 60 * 1000
).toISOString();

const to = now.toISOString();

const query = `
query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    name
    login

    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            color
            date
            weekday
          }
        }
      }
    }
  }
}
`;

async function getContributionData() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "robot-cat-contribution-generator"
    },

    body: JSON.stringify({
      query,

      variables: {
        login: username,
        from,
        to
      }
    })
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API failed: ${response.status} ${response.statusText}`
    );
  }

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("GitHub GraphQL query failed.");
  }

  if (!json.data?.user) {
    throw new Error(`GitHub user "${username}" not found.`);
  }

  return json.data.user;
}

function escapeXml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function contributionColor(count, dark = false) {
  if (count === 0) {
    return dark ? "#161b22" : "#ebedf0";
  }

  if (count <= 2) {
    return "#9be9a8";
  }

  if (count <= 5) {
    return "#40c463";
  }

  if (count <= 9) {
    return "#30a14e";
  }

  return "#216e39";
}

function buildRobotCat(x, y) {
  return `
  <g id="robot-cat" transform="translate(${x}, ${y})">

    <g class="robot-body">

      <!-- Tail -->
      <path
        d="M -20 20
           C -38 15, -38 -5, -23 -8"
        fill="none"
        stroke="#258bd2"
        stroke-width="5"
        stroke-linecap="round"
      />

      <circle
        cx="-23"
        cy="-8"
        r="5"
        fill="#ffce3a"
      />

      <!-- Body -->
      <ellipse
        cx="0"
        cy="22"
        rx="25"
        ry="27"
        fill="#258bd2"
      />

      <!-- Belly -->
      <ellipse
        cx="0"
        cy="23"
        rx="16"
        ry="19"
        fill="#ffffff"
      />

      <!-- Left ear -->
      <path
        d="M -19 -19
           L -27 -38
           L -7 -26 Z"
        fill="#258bd2"
      />

      <path
        d="M -20 -24
           L -24 -33
           L -12 -27 Z"
        fill="#f6a5ba"
      />

      <!-- Right ear -->
      <path
        d="M 19 -19
           L 27 -38
           L 7 -26 Z"
        fill="#258bd2"
      />

      <path
        d="M 20 -24
           L 24 -33
           L 12 -27 Z"
        fill="#f6a5ba"
      />

      <!-- Head -->
      <circle
        cx="0"
        cy="-6"
        r="28"
        fill="#258bd2"
      />

      <!-- Face -->
      <ellipse
        cx="0"
        cy="1"
        rx="22"
        ry="20"
        fill="#ffffff"
      />

      <!-- Eyes -->
      <ellipse
        cx="-8"
        cy="-10"
        rx="6"
        ry="8"
        fill="#ffffff"
        stroke="#24292f"
        stroke-width="1.5"
      />

      <ellipse
        cx="8"
        cy="-10"
        rx="6"
        ry="8"
        fill="#ffffff"
        stroke="#24292f"
        stroke-width="1.5"
      />

      <circle
        cx="-6"
        cy="-8"
        r="2"
        fill="#24292f"
      />

      <circle
        cx="6"
        cy="-8"
        r="2"
        fill="#24292f"
      />

      <!-- Nose -->
      <circle
        cx="0"
        cy="-1"
        r="4"
        fill="#ff5c68"
      />

      <!-- Mouth -->
      <path
        d="M 0 3
           L 0 9
           M -8 12
           Q 0 19 8 12"
        fill="none"
        stroke="#24292f"
        stroke-width="1.7"
        stroke-linecap="round"
      />

      <!-- Whiskers -->
      <path
        d="
        M -12 3 L -27 -1
        M -12 7 L -28 7
        M -12 11 L -27 15

        M 12 3 L 27 -1
        M 12 7 L 28 7
        M 12 11 L 27 15
        "
        fill="none"
        stroke="#57606a"
        stroke-width="1.3"
        stroke-linecap="round"
      />

      <!-- Collar -->
      <rect
        x="-20"
        y="15"
        width="40"
        height="5"
        rx="2.5"
        fill="#ff5c68"
      />

      <!-- Bell -->
      <circle
        cx="0"
        cy="22"
        r="5"
        fill="#ffce3a"
        stroke="#c69000"
        stroke-width="1"
      />

      <!-- Arms -->
      <circle
        cx="-22"
        cy="20"
        r="7"
        fill="#ffffff"
      />

      <circle
        cx="22"
        cy="20"
        r="7"
        fill="#ffffff"
      />

    </g>

    <!-- Floating code bubble -->
    <g transform="translate(33,-30)">
      <rect
        x="0"
        y="0"
        width="37"
        height="22"
        rx="7"
        fill="#ffffff"
        stroke="#d0d7de"
      />

      <text
        x="18.5"
        y="15"
        text-anchor="middle"
        font-family="monospace"
        font-size="10"
        font-weight="700"
        fill="#0969da"
      >&lt;/&gt;</text>
    </g>

  </g>
  `;
}

function generateSvg(user, dark = false) {
  const calendar =
    user.contributionsCollection.contributionCalendar;

  const weeks = calendar.weeks;

  const cellSize = 10;
  const cellGap = 3;
  const step = cellSize + cellGap;

  const startX = 52;
  const startY = 55;

  const gridWidth = weeks.length * step;
  const gridHeight = 7 * step;

  const width = Math.max(760, startX + gridWidth + 80);
  const height = 230;

  const bg = dark ? "#0d1117" : "#ffffff";
  const text = dark ? "#c9d1d9" : "#24292f";
  const muted = dark ? "#8b949e" : "#57606a";
  const border = dark ? "#30363d" : "#d0d7de";

  let cells = "";
  let monthLabels = "";

  let previousMonth = null;

  weeks.forEach((week, weekIndex) => {
    const days = week.contributionDays || [];

    days.forEach((day) => {
      const x = startX + weekIndex * step;
      const y = startY + day.weekday * step;

      const color = contributionColor(
        day.contributionCount,
        dark
      );

      cells += `
        <rect
          x="${x}"
          y="${y}"
          width="${cellSize}"
          height="${cellSize}"
          rx="2"
          fill="${color}"
        >
          <title>
            ${day.contributionCount} contributions on ${day.date}
          </title>
        </rect>
      `;
    });

    const firstDay = days[0];

    if (firstDay) {
      const date = new Date(firstDay.date);
      const month = date.toLocaleString("en-US", {
        month: "short"
      });

      if (month !== previousMonth) {
        previousMonth = month;

        monthLabels += `
          <text
            x="${startX + weekIndex * step}"
            y="42"
            font-size="10"
            fill="${muted}"
            font-family="Segoe UI, Arial, sans-serif"
          >${month}</text>
        `;
      }
    }
  });

  const robotStartX = startX - 35;
  const robotY = startY + 33;

  const robotEndX =
    startX + gridWidth - 35;

  const total =
    calendar.totalContributions;

  return `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
>

<style>

  .robot-body {
    transform-origin: center;
    animation: bounce 0.7s ease-in-out infinite alternate;
  }

  @keyframes bounce {
    from {
      transform: translateY(-2px);
    }

    to {
      transform: translateY(2px);
    }
  }

</style>

<rect
  width="100%"
  height="100%"
  rx="12"
  fill="${bg}"
  stroke="${border}"
/>

<text
  x="25"
  y="27"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="15"
  font-weight="600"
  fill="${text}"
>
  ${escapeXml(user.name || user.login)}'s Coding Journey
</text>

<text
  x="${width - 25}"
  y="27"
  text-anchor="end"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="11"
  fill="${muted}"
>
  ${total} contributions in the last year
</text>

${monthLabels}

${cells}

<g>

  ${buildRobotCat(0, 0)}

  <animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    values="
      ${robotStartX},${robotY};
      ${robotEndX},${robotY};
      ${robotStartX},${robotY}
    "
    keyTimes="0;0.5;1"
    dur="18s"
    repeatCount="indefinite"
  />

</g>

<text
  x="${startX}"
  y="${startY + gridHeight + 28}"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="11"
  fill="${muted}"
>
  Learning • Building • Committing • Improving
</text>

</svg>
`;
}

async function main() {
  try {
    console.log(
      `Fetching contribution data for ${username}...`
    );

    const user = await getContributionData();

    console.log(
      `Found ${user.contributionsCollection.contributionCalendar.totalContributions} contributions.`
    );

    fs.mkdirSync("dist", {
      recursive: true
    });

    const lightSvg =
      generateSvg(user, false);

    const darkSvg =
      generateSvg(user, true);

    fs.writeFileSync(
      "dist/robot-cat-contribution.svg",
      lightSvg
    );

    fs.writeFileSync(
      "dist/robot-cat-contribution-dark.svg",
      darkSvg
    );

    console.log(
      "Robot Cat contribution SVGs generated successfully."
    );
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

main();
