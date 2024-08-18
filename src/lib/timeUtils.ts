export const calculateTimeElapsed = (startTime: number): string => {
    const now = new Date().getTime();
    const elapsed = now - startTime;
  
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
  
    if (weeks > 0) return `${weeks} sem`;
    if (days > 0) return `${days} d`;
    if (hours > 0) return `${hours} h`;
    if (minutes > 0) return `${minutes} min`;
    return `${seconds} s`;
  };