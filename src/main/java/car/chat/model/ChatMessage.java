package car.chat.model;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table (name = "chat")
public class ChatMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private String message;
	@Column
	private String sender;
	@Column(name = "date_time_sent")
	private Date received;
	@Column
	private String receiver;
	@Column
	private Long roomId;

	public final String getMessage() {
		return message;
	}

	public final void setMessage(final String message) {
		this.message = message;
	}

	public final String getSender() {
		return sender;
	}

	public final void setSender(final String sender) {
		this.sender = sender;
	}

	public final Date getReceived() {
		return received;
	}

	public final void setReceived(final Date received) {
		this.received = received;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

	public Long getRoomId() {
		return roomId;
	}

	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}

	@Override
	public String toString() {
		return "ChatMessage [message=" + message + ", sender=" + sender
				+ ", received=" + received + "]";
	}

	public String toJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{")
				.append(" \"id\":\"").append(getId()).append("\",")
				.append("\"dateReceived\": \"").append(getReceived()).append("\",")
				.append("\"sender\":\"").append(getSender()).append("\",")
				.append("\"roomId\":\"").append(getRoomId()).append("\",")
				.append("\"receiver\": \"").append(getReceiver()).append("\",");
		sb.append("}");
		return sb.toString();
	}
}
