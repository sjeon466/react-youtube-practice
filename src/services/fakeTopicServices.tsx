export interface ITopic {
  title: string;
  videos: Array<{
    id: number;
    videoUrl: string;
    videoTitle: string;
    videoCreator: string;
    numViews: string;
    createdTime: string;
  }>;
}

export interface IVideo {
  id: number;
  videoUrl: string;
  videoTitle: string;
  videoCreator: string;
  numViews: string;
  createdTime: string;
}

export function getTopics(): ITopic[] {
  return [
    {
      title: "Recommended",
      videos: [
        {
          id: 1,
          videoUrl:
            "https://i.ytimg.com/vi/x6HE2kdj6Zc/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLBtI_SDiU7ET5RYKr2ac5cbAa-hWA",

          videoTitle: "Family guy - Asian drycleaner",
          videoCreator: "kimsoerensen",
          numViews: "6.4M",
          createdTime: "6 years"
        },
        {
          id: 2,
          videoUrl:
            "https://i.ytimg.com/vi/A22oy8dFjqc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAP4KjQ8sSb6KtC1u38J2Ix0KO4kw",
          videoTitle: "Queen - Live at LIVE AID",
          videoCreator: "Simon Christensen",
          numViews: "110M",
          createdTime: "3 years"
        },
        {
          id: 3,
          videoUrl:
            "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A",

          videoTitle: "JavaScript Fundamentals For Beginners",
          videoCreator: "Travery Media",
          numViews: "1M",
          createdTime: "2 years"
        },
        {
          id: 4,
          videoUrl:
            "https://i.ytimg.com/vi/nM0xDI5R50E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDmnRgsKJA3Xb2oR8nrLvhx3YHIWA",
          videoTitle: "[MV] IU(아이유)_BBIBBI(삐삐)",
          videoCreator: "1thK (원더케이)",
          numViews: "52M",
          createdTime: "1 month"
        },
        {
          id: 5,
          videoUrl:
            "https://i.ytimg.com/vi/x6HE2kdj6Zc/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLBtI_SDiU7ET5RYKr2ac5cbAa-hWA",

          videoTitle: "Family guy - Asian drycleaner",
          videoCreator: "kimsoerensen",
          numViews: "6.4M",
          createdTime: "6 years"
        },
        {
          id: 6,
          videoUrl:
            "https://i.ytimg.com/vi/A22oy8dFjqc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAP4KjQ8sSb6KtC1u38J2Ix0KO4kw",
          videoTitle: "Queen - Live at LIVE AID",
          videoCreator: "Simon Christensen",
          numViews: "110M",
          createdTime: "3 years"
        },
        {
          id: 7,
          videoUrl:
            "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A",

          videoTitle: "JavaScript Fundamentals For Beginners",
          videoCreator: "Travery Media",
          numViews: "1M",
          createdTime: "2 years"
        },
        {
          id: 8,
          videoUrl:
            "https://i.ytimg.com/vi/nM0xDI5R50E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDmnRgsKJA3Xb2oR8nrLvhx3YHIWA",
          videoTitle: "[MV] IU(아이유)_BBIBBI(삐삐)",
          videoCreator: "1thK (원더케이)",
          numViews: "52M",
          createdTime: "1 month"
        },
        {
          id: 9,
          videoUrl:
            "https://i.ytimg.com/vi/A22oy8dFjqc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAP4KjQ8sSb6KtC1u38J2Ix0KO4kw",
          videoTitle: "Queen - Live at LIVE AID",
          videoCreator: "Simon Christensen",
          numViews: "110M",
          createdTime: "3 years"
        },
        {
          id: 10,
          videoUrl:
            "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A",

          videoTitle: "JavaScript Fundamentals For Beginners",
          videoCreator: "Travery Media",
          numViews: "1M",
          createdTime: "2 years"
        },
        {
          id: 11,
          videoUrl:
            "https://i.ytimg.com/vi/nM0xDI5R50E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDmnRgsKJA3Xb2oR8nrLvhx3YHIWA",
          videoTitle: "[MV] IU(아이유)_BBIBBI(삐삐)",
          videoCreator: "1thK (원더케이)",
          numViews: "52M",
          createdTime: "1 month"
        }
      ]
    },
    {
      title: "Trending",
      videos: [
        {
          id: 1,
          videoUrl:
            "https://i.ytimg.com/vi/vzaXw2ztCqU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBQvaQeXJxBEWozUATzw_JGhxG9TQ",
          videoTitle: "Conan Rents A Family in Japan",
          videoCreator: "Team Coco",
          numViews: "1.1M",
          createdTime: "1 day"
        },
        {
          id: 2,
          videoUrl:
            "https://i.ytimg.com/vi/wCvBveM9BVM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDMFJ2wELBlXREXXvWIR_vvMXDDWA",
          videoTitle: "Macaulay Culkin",
          videoCreator: "The Tonight Show",
          numViews: "821K",
          createdTime: "1 day"
        },
        {
          id: 3,
          videoUrl:
            "https://i.ytimg.com/vi/vzaXw2ztCqU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBQvaQeXJxBEWozUATzw_JGhxG9TQ",
          videoTitle: "Conan Rents A Family in Japan",
          videoCreator: "Team Coco",
          numViews: "1.1M",
          createdTime: "1 day"
        },
        {
          id: 4,
          videoUrl:
            "https://i.ytimg.com/vi/wCvBveM9BVM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDMFJ2wELBlXREXXvWIR_vvMXDDWA",
          videoTitle: "Macaulay Culkin",
          videoCreator: "The Tonight Show",
          numViews: "821K",
          createdTime: "1 day"
        },
        {
          id: 5,
          videoUrl:
            "https://i.ytimg.com/vi/vzaXw2ztCqU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBQvaQeXJxBEWozUATzw_JGhxG9TQ",
          videoTitle: "Conan Rents A Family in Japan",
          videoCreator: "Team Coco",
          numViews: "1.1M",
          createdTime: "1 day"
        },
        {
          id: 6,
          videoUrl:
            "https://i.ytimg.com/vi/wCvBveM9BVM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDMFJ2wELBlXREXXvWIR_vvMXDDWA",
          videoTitle: "Macaulay Culkin",
          videoCreator: "The Tonight Show",
          numViews: "821K",
          createdTime: "1 day"
        }
      ]
    }
  ];
}

export function getEntries() {
  return [
    {
      videoUrl:
        "https://i.ytimg.com/vi/UybVZgRQe_k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBDicw5Zq9ouVVicNkCocYHoJDpSg",
      videoTitle: "[병맛더빙]삼폰지",
      videoCreator: "장삐쭈",
      numViews: "2.2M",
      createdTime: "2 years"
    },
    {
      videoUrl:
        "https://i.ytimg.com/vi/A22oy8dFjqc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAP4KjQ8sSb6KtC1u38J2Ix0KO4kw",
      videoTitle: "Queen - Live at LIVE AID",
      videoCreator: "Simon Christensen",
      numViews: "110M",
      createdTime: "3 years"
    }
  ];
}
