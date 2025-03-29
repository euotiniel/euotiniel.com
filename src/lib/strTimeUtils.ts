export const calculateTimeElapsedStr = (startTime: number): string => {
    const now = new Date().getTime();
    const elapsed = now - startTime;
  
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
  
    if (weeks > 0) return ` sem`;
    if (days > 0) return ` d`;
    if (hours > 0) return ` h`;
    if (minutes > 0) return ` min`;
    return ` s`;
  };