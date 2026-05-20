/**
 * Placeholder for STOMP/SockJS integration when backend exposes WebSocket.
 */
export const websocketService = {
  connect(_url, _onMessage) {
    // Implement with SockJS + STOMP client when backend is ready
    return { disconnect: () => {} }
  },
}
