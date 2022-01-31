export async function getAdress(ip = '8.8.8.8') {
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_1dqFV88UBSqsVUUIqC8LRtfGN0Z3Q&ipAddress=${ip}`
      )
        return await response.json();
}