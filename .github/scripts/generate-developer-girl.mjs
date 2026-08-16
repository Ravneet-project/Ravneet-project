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
    login
    name

    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
            weekday
          }
        }
      }
    }
  }
}
`;

async function getGitHubData() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "developer-girl-contribution-graph"
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
      `GitHub API request failed: ${response.status}`
    );
  }

  const result = await response.json();

  if (result.errors) {
    console.error(result.errors);
    throw new Error("GitHub GraphQL API returned errors.");
  }

  if (!result.data?.user) {
    throw new Error(`GitHub user ${username} not found.`);
  }

  return result.data.user;
}

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getContributionColor(count, dark) {
  if (count === 0) {
    return dark ? "#21262d" : "#ebedf0";
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

function developerGirl() {
  return `
    <g class="developer-girl">

      <!-- Hair back -->
      <ellipse
        cx="0"
        cy="-12"
        rx="20"
        ry="23"
        fill="#352a38"
      />

      <!-- Hoodie body -->
      <path
        d="
          M -18 13
          Q 0 5 18 13
          L 22 40
          L -22 40
          Z
        "
        fill="#7c5cff"
      />

      <!-- Head -->
      <circle
        cx="0"
        cy="-11"
        r="16"
        fill="#f2c6a0"
      />

      <!-- Hair -->
      <path
        d="
          M -16 -15
          Q -10 -34 3 -29
          Q 18 -25 16 -8
          Q 11 -20 3 -18
          Q -6 -24 -16 -15
        "
        fill="#352a38"
      />

      <!-- Left hair -->
      <path
        d="
          M -14 -14
          Q -21 5 -12 13
          L -5 4
          Q -13 -4 -14 -14
        "
        fill="#352a38"
      />

      <!-- Right hair -->
      <path
        d="
          M 14 -13
          Q 22 3 13 14
          L 6 5
          Q 14 -4 14 -13
        "
        fill="#352a38"
      />

      <!-- Eyes -->
      <circle cx="-5" cy="-10" r="1.7" fill="#24292f" />
      <circle cx="5" cy="-10" r="1.7" fill="#24292f" />

      <!-- Smile -->
      <path
        d="M -4 -3 Q 0 1 4 -3"
        fill="none"
        stroke="#8b4d42"
        stroke-width="1.4"
        stroke-linecap="round"
      />

      <!-- Laptop -->
      <rect
        x="-18"
        y="18"
        width="36"
        height="22"
        rx="3"
        fill="#24292f"
      />

      <rect
        x="-14"
        y="21"
        width="28"
        height="15"
        rx="2"
        fill="#343a40"
      />

      <text
        x="0"
        y="32"
        text-anchor="middle"
        font-family="monospace"
        font-size="9"
        font-weight="700"
        fill="#67e8f9"
      >&lt;/&gt;</text>

      <!-- Hands -->
      <circle cx="-18" cy="28" r="4" fill="#f2c6a0" />
      <circle cx="18" cy="28" r="4" fill="#f2c6a0" />

      <!-- Code bubble -->
      <g transform="translate(24,-30)">
        <rect
          x="0"
          y="0"
          width="43"
          height="23"
          rx="8"
          fill="#ffffff"
          stroke="#d0d7de"
        />

        <text
          x="21.5"
          y="15"
          text-anchor="middle"
          font-family="monospace"
          font-size="9"
          font-weight="700"
          fill="#7c5cff"
        >
          { code }
        </text>
      </g>

    </g>
  `;
}

function generateSvg(user, dark = false) {
  const calendar =
    user.contributionsCollection.contributionCalendar;

  const weeks = calendar.weeks || [];

  const cellSize = 10;
  const gap = 3;
  const step = cellSize + gap;

  const startX = 45;
  const startY = 58;

  const gridWidth = weeks.length * step;
  const gridHeight = 7 * step;

  const width = Math.max(760, gridWidth + 100);
  const height = 235;

  const background = dark ? "#0d1117" : "#ffffff";
  const textColor = dark ? "#f0f6fc" : "#24292f";
  const mutedColor = dark ? "#8b949e" : "#57606a";
  const borderColor = dark ? "#30363d" : "#d0d7de";

  let cells = "";
  let monthLabels = "";

  let previousMonth = "";

  weeks.forEach((week, weekIndex) => {
    const days = week.contributionDays || [];

    days.forEach((day) => {
      const x = startX + weekIndex * step;
      const y = startY + day.weekday * step;

      cells += `
        <rect
          x="${x}"
          y="${y}"
          width="${cellSize}"
          height="${cellSize}"
          rx="2"
          fill="${getContributionColor(
            day.contributionCount,
            dark
          )}"
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
            y="46"
            font-size="10"
            font-family="Segoe UI, Arial, sans-serif"
            fill="${mutedColor}"
          >
            ${month}
          </text>
        `;
      }
    }
  });

  const characterStart = startX - 15;

  const characterEnd =
    startX + gridWidth - 25;

  const characterY =
    startY + 35;

  return `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
>

<style>

.developer-girl {
  transform-origin: center;
  animation: float 0.7s ease-in-out infinite alternate;
}

@keyframes float {

  from {
    transform: translateY(-2px);
  }

  to {
    transform: translateY(2px);
  }

}

</style>

<rect
  x="1"
  y="1"
  width="${width - 2}"
  height="${height - 2}"
  rx="12"
  fill="${background}"
  stroke="${borderColor}"
/>

<text
  x="25"
  y="27"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="16"
  font-weight="600"
  fill="${textColor}"
>
  ${escapeXml(user.name || user.login)}'s Coding Journey
</text>

<text
  x="${width - 25}"
  y="27"
  text-anchor="end"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="11"
  fill="${mutedColor}"
>
  ${calendar.totalContributions} contributions
</text>

${monthLabels}

${cells}

<g>

  ${developerGirl()}

  <animateTransform
    attributeName="transform"
    type="translate"
    values="
      ${characterStart},${characterY};
      ${characterEnd},${characterY};
      ${characterStart},${characterY}
    "
    keyTimes="0;0.5;1"
    dur="20s"
    repeatCount="indefinite"
  />

</g>

<text
  x="${startX}"
  y="${startY + gridHeight + 30}"
  font-family="Segoe UI, Arial, sans-serif"
  font-size="11"
  fill="${mutedColor}"
>
  Code • Commit • Learn • Improve
</text>

</svg>
`;
}

async function main() {
  try {
    console.log(`Loading contribution data for ${username}`);

    const user = await getGitHubData();

    console.log(
      `Total contributions: ${user.contributionsCollection.contributionCalendar.totalContributions}`
    );

    fs.mkdirSync("dist", {
      recursive: true
    });

    fs.writeFileSync(
      "dist/developer-girl-contribution.svg",
      generateSvg(user, false)
    );

    fs.writeFileSync(
      "dist/developer-girl-contribution-dark.svg",
      generateSvg(user, true)
    );

    console.log("Developer Girl SVG files generated successfully.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
