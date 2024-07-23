# VTS Backend
The Backend is built on Node Express, using Websockets through Socket.IO and a Redis Database. The Backend works majorly in a Pub-Sub Architecture with some RESTful communication for handling room creation.
## SocketIO
SocketIO handles the real time communication from the money transfers. It works with the rooms system by subscribing any player that joins a room to the events that will be emited there. The main event is a money transfer, in which the server will emit a balanceUpdated event to all players in the room.
## Redis
Redis is there to store a match's temporary data, like the players balance. That way even when a player disconnects the current state of the game can be maintained and if they rejoin their balance can be restored. Each room has its own "Balances" table linking every player to their respective balance.
