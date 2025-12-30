import styles from "./Card.module.css";

// const getYouTubeThumbnailUrl = (videoId) => {
//   return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
// };

// const buildYouTubeEmbedUrl = (videoId) => {
//   if (!videoId) return null;
//   return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
// };

const Card = ({
  title,
  description,
  href,
  target = "_blank",
  type,
  // videoId,
  thumbnailUrl,
  logo,
}) => {
  // const youtubeEmbedUrl =
  //   type === "youtube" ? buildYouTubeEmbedUrl(videoId) : null;

  // const youtubeThumbnailUrl =
  //   type === "youtube" ? getYouTubeThumbnailUrl(videoId) : null;

  return (
    <a className={styles.card} href={href} target={target} rel="noreferrer">
      {/* Logo block at the top, if provided */}
      {/* {logo && (
        <div className={styles.cardLogo}>
          <img src={logo} alt={`${title} logo`} />
        </div>
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div> */}

      <div className={styles.cardHeaderRow}>
        {logo && (
          <div className={styles.cardLogo}>
            <img src={logo} alt={`${title} logo`} />
          </div>
        )}

        <div className={styles.cardHeaderText}>
          <h3 className={styles.cardTitle}>{title}</h3>
          {description && (
            <p className={styles.cardDescription}>{description}</p>
          )}
        </div>
      </div>

      <div className={styles.cardVideoWrapper}>
        {/* {type === "youtube" && youtubeEmbedUrl && !thumbnailUrl && (
          <div className={styles.cardVideoInner}>
            <img
              className={styles.cardVideoThumbnail}
              src={youtubeThumbnailUrl}
              alt="YouTube Video Preview"
              onClick={() => window.open(youtubeEmbedUrl, "_blank")}
            />
            <div className={styles.cardVideoOverlay}>
              <span className={styles.cardVideoPlayIcon}>▶</span>
            </div>
          </div>
        )} */}

        {type === "youtube" && (
          <div className={styles.cardVideoInner}>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={`${title} preview`}
                className={styles.cardVideoThumbnail}
              />
            )}
            <div className={styles.cardVideoOverlay}>
              <span className={styles.cardVideoPlayIcon}>▶</span>
              <span className={styles.cardVideoLabel}>Watch on {title}</span>
            </div>
          </div>
        )}

        {type === "external" && (
          <div className={styles.cardVideoInner}>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={`${title} preview`}
                className={styles.cardVideoThumbnail}
              />
            )}
            <div className={styles.cardVideoOverlay}>
              <span className={styles.cardVideoPlayIcon}>▶</span>
              <span className={styles.cardVideoLabel}>Watch on {title}</span>
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
